import Link from "next/link";
import SmartTable from "./SmartTable";
import { useEffect } from "react";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const headCells = [
  {
    id: "serial_num",
    numeric: false,
    label: "Serial No.",
    width: 100,
  },
  {
    id: "doc_name",
    numeric: false,
    label: "Document Name",
    width: 150,
  },
  {
    id: "action",
    numeric: false,
    label: "Action",
    width: 150,
  },
  // {
  //   id: "subject",
  //   numeric: false,
  //   label: "Registration No.",
  //   width: 150,
  // },
  // {
  //   id: "message",
  //   numeric: false,
  //   label: "City",
  //   width: 100,
  // },
  // {
  //   id: "message",
  //   numeric: false,
  //   label: "State",
  //   width: 100,
  // },
  // {
  //   id: "message",
  //   numeric: false,
  //   label: "Assigned Garage",
  //   width: 100,
  // },
  // {
  //   id: "message",
  //   numeric: false,
  //   label: "Case Age (Days)",
  //   width: 150,
  // },
  // {
  //   id: "message",
  //   numeric: false,
  //   label: "Case Age (Insurer)",
  //   width: 150,
  // },
  // {
  //   id: "message",
  //   numeric: false,
  //   label: "Officer",
  //   width: 100,
  // },
  // {
  //   id: "message",
  //   numeric: false,
  //   label: "Request Type",
  //   width: 100,
  // },
  // {
  //   id: "serial",
  //   numeric: false,
  //   label: "Insurer Claim ID.",
  //   width: 100,
  // },
];

const data = [
  {
    _id: "6144145976c7fe",
    serial_num: "1",
    doc_name: "Driving licence",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "2",
    doc_name: "Certificate of registration",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "3",
    doc_name: "Repair Estimate",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "4",
    doc_name: "Claim form",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "5",
    doc_name: "Insurance policy",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "6",
    doc_name: "Damage vehicle photographs/video",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "7",
    doc_name: "Aadhar card",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "8",
    doc_name: "Pan card",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "9",
    doc_name: " Cancel cheque",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "10",
    doc_name: " Satisfaction voucher",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "11",
    doc_name: "Discharge voucher",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "12",
    doc_name: "Dismantle photographs",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "13",
    doc_name: "Reinspection photographs",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "14",
    doc_name: "Repair Invoice",
    action: "2021-09-17 19:10:50",
  },
  {
    _id: "6144145976c7fe",
    serial_num: "15",
    doc_name: "Payment/cash receipt",
    action: "2021-09-17 19:10:50",
  },
];

export default function Exemple() {

  const [updatedCode,setUpdatedCode] = useState([]);
  const [filesUrl,setFilesUrl] =useState("");
  const [attachment,setAttachment] = useState("");

  const [change,setChange] = useState(false);
  

  const [uploadedData,setUploadedData]=useState([]);

  const handleUpload = (result,index,edit) => {
   
    try {
      const fileUrl = result.info.secure_url;
      
      const newUploadData = {
        "id":index,
        "name":result.info.original_filename + "." + result.info.format,
        "url":result.info.url
      }
      const earlierData = uploadedData;
      if(edit === true){
      let updated = [];
      earlierData.map((data,idx)=>{
        if(String(data.id) === String(index)){
          updated.push(newUploadData);
        }
        else{
          updated.push(data);
        }
      })
      setUpdatedCode(updated);
      }
      else{
        earlierData.push(newUploadData);
      setUpdatedCode(earlierData);
      }
      
      console.log(updatedCode);
      setChange(true);

    } catch (error) {
      console.error("Error handling upload:", error);
    }
  };

  const checkIsUploaded = (index)=>{
    console.log(uploadedData);
    let selectedField = {};
    uploadedData.map((data,idx)=>{
      if(String(index) === String(data.id)){
        selectedField = data;
      }
    })

    return selectedField;
  }
  useEffect(()=>{
    const getData = ()=>{
      const tempData = [];
        data.map((row,index)=>{
          const isUploaded  = checkIsUploaded(index);
          // console.log(isUploaded,index);
          const updatedRow = {
            _id:index+1,
            serial_num:row.serial_num,
            doc_name:row.doc_name,
            action: (
              isUploaded.name ? <div style={{display:"flex",flexDirection:"row",paddingLeft:"30%",marginLeft:'6%'}}>
              
               <h4>{isUploaded ? isUploaded.name : ""}</h4>
              <CldUploadWidget
            onUpload={(result)=>handleUpload(result,index,true)}
            uploadPreset="mpbjdclg"
            options={{
              cloudName: "dcrq3m6dx", // Your Cloudinary cloud name
              allowedFormats: [
                "jpg",
                "png",
                "pdf",
                "csv",
                "word",
                "excel"
              ], // Specify allowed formats
              maxFiles: 50,
            }}
          >
            {({ open }) => (
              <div>
                <button
                  className="btn btn-color profile_edit_button mb-5"
                  style={{}}
                  onClick={open} 
                >
                 Edit
                </button>
              </div>
            )}
          </CldUploadWidget>
         <a  className="btn btn-color profile_edit_button mb-5" href={isUploaded.url} target="_blank" rel="noopener noreferrer">View</a> 
         </div>:
         <>
         <CldUploadWidget
            onUpload={(result)=>handleUpload(result,index)}
            uploadPreset="mpbjdclg"
            options={{
              cloudName: "dcrq3m6dx", // Your Cloudinary cloud name
              allowedFormats: [
                "jpg",
                "png",
                "pdf",
                "csv",
                "word",
                "excel",
                "pdf"
              ], // Specify allowed formats
              maxFiles: 50,
            }}
          >
            {({ open }) => (
              <div>
                <button
                  className="btn btn-color profile_edit_button mb-5"
                  style={{}}
                  onClick={open} 
                >
                  Upload Files
                </button>
              </div>
            )}
          </CldUploadWidget>
          </> )
          }
          tempData.push(updatedRow);
        });
        return tempData;
    }
    // getData();
    setUpdatedCode(getData());
    setChange(false);
  },[uploadedData,change]);

  useEffect(()=>{
    if(uploadedData){
      console.log(uploadedData)
    }
  },[uploadedData]);
console.log(uploadedData)
 
  return (
    <SmartTable title="Documents Upload" data={updatedCode} headCells={headCells} />
  );
}
