
import { useRouter } from "next/router";
import Exemple from "./Exemple_01";
import { useState } from "react";
import axios from "axios";
import Pako from "pako";

import AWS from 'aws-sdk';
import toast from "react-hot-toast";


AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_REGION,
});


const REGION = process.env.NEXT_PUBLIC_REGION;

const S3_BUCKET = process.env.NEXT_PUBLIC_S3_BUCKET;

const myBucket= new AWS.S3({params:{Bucket:S3_BUCKET},region:REGION});


const UploadReort = ({ leadId }) => {
  const [garage, setGarage] = useState("");
  const [reportType, setReportType] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [uploadedFile, setUploadedFile] = useState("");
  const [disable,setDisable]=useState(false);
  const [loc,setLoc]=useState("")
  const router = useRouter();

  const types = [
    { name: "Driving licence" },
    { name: "Certificate of registration" },
    { name: "Repair Estimate" },
    { name: "Claim form" },
    { name: "Insurance policy" },
    { name: "Damage vehicle photographs/video" },
    { name: "Aadhar card" },
    { name: "Pan card" },
    { name: "Cancel cheque" },
    { name: "Satisfaction voucher" },
    { name: "Discharge voucher" },
    { name: "Dismantle photographs" },
    { name: "Reinspection photographs" },
    { name: "Repair Invoice" },
    { name: "Payment/cash receipt" },
  ];

  const location = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLoc(latitude + "," + longitude);
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          // You can use the latitude and longitude here as needed
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  };


  const onUploadDoc = async (e)  => {
   
    location();
    
    setDisable(true);
   
    const selectedFileCurrent = e.target.files[0];
    
      const params = {
        ACL:'public-read',
        Body:selectedFileCurrent,
        Bucket:S3_BUCKET,
        Key:selectedFileCurrent.name,
        ContentType: 'image/jpeg',
        ContentDisposition: 'inline'
      };

     
      myBucket.putObject(params).send((err,data)=>{
        if(err){
          toast.error("Error while uploading!!");
        }
        else{
          const S3_URL = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${encodeURIComponent(selectedFileCurrent.name)}`;
      
          const payload = {
            garage: garage,
            reportType: reportType,
            fileName: file.name,
            fileUrl: S3_URL,
            LeadId: leadId,
            token: userInfo[0].Token,
            uploadedBy: userInfo[0].Username,
            timestamp:new Date(),
            Location: loc
          };

        }
      })

       
        
    setDisable(false)
  };


  const fileUploadHandler = async (e) => {
    try {
      const file = document.getElementById("fileInput").files[0];
      if (!file) {
        console.error("No file selected");
        return;
      }

      const fileContentBase64 = await readFileAsync(file);
      const compressedContent = Pako.gzip(fileContentBase64, { to: "string" });
      setUploadedFile(compressedContent);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  // Helper function to read file asynchronously
  const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div className="faq_according row">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="btn accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                style={{ padding: "10px 10px 0 25px" }}
              >
                <h4 className="">Upload Report</h4>
                <div className="col-lg-1 m-1"></div>
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body bgc-f6">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row mt-1 mb-1">
                      <div className="col-lg-3 my_profile_setting_input form-group">
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                          }}
                        >
                          Select Gaarge <span class="text-danger">*</span>
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <select
                          className="selectpicker form-select"
                          data-live-search="true"
                          data-width="100%"
                          value={garage}
                          onChange={(e) => setGarage(e.target.value)}
                        >
                          <option data-tokens="Status1">Select</option>
                          <option data-tokens="Status1">
                            Megapower Car Services
                          </option>
                          {/* <option data-tokens="Status2">Delhi</option>
                                      <option data-tokens="Status3">Chandigarh</option> */}
                        </select>
                      </div>
                      <div className="col-lg-4">
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            cursor: "pointer",
                            fontWeight: "",
                          }}
                        >
                          Simple Preliminary Report{" "}
                          <span className="flaticon-pdf"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row mt-1 mb-1">
                      <div className="col-lg-3 my_profile_setting_input form-group">
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                          }}
                        >
                          Report Type <span class="text-danger">*</span>
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <select
                          className="selectpicker form-select"
                          data-live-search="true"
                          data-width="100%"
                          value={reportType}
                          onChange={(e) => setReportType(e.target.value)}
                        >
                          {types.map((type, index) => {
                            return (
                              <option
                                data-tokens="Status1"
                                value={type.name}
                                key={index}
                              >
                                {type.name}
                              </option>
                            );
                          })}

                          {/* <option data-tokens="Status2">Delhi</option>
                                      <option data-tokens="Status3">Chandigarh</option> */}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row mt-1 mb-1">
                      <div className="col-lg-3 my_profile_setting_input form-group">
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                          }}
                        >
                          File Name <span class="text-danger">*</span>
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="text"
                          className="form-control"
                          id="propertyTitle"
                          value={fileName}
                          onChange={(e) => setFileName(e.target.value)}
                          // placeholder="Enter Registration No."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row mt-1 mb-1">
                      <div className="col-lg-3 my_profile_setting_input form-group">
                        <label
                          htmlFor=""
                          className="text-color"
                          style={{
                            color: "#1560bd",
                            fontWeight: "",
                          }}
                        >
                          Attach File <span class="text-danger">*</span>
                        </label>
                      </div>
                      <div className="col-lg-5">
                        <input
                          type="file"
                          className="form-control"
                          id="fileInput"
                          onChange={fileUploadHandler}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 text-end">
                    <button
                      className="btn btn-color mt-0 "
                      onClick={(e)=>onUploadDoc(e)}
                      disabled={disable}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <Exemple leadId={leadId} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadReort;
