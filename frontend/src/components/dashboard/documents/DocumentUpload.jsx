import Image from "next/image";
import SmartTable from "./SmartTable";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import Modal from "react-modal";
import Webcam from "react-webcam";
import axios from "axios";

const headCells = [
  {
    id: "doc_name",
    numeric: false,
    label: "Document Name",
    width: 120,
  },
  {
    id: "files",
    numeric: false,
    label: "Files",
    width: 150,
  },
  {
    id: "action",
    numeric: false,
    label: "Action",
    width: 50,
  }
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

export default function DocumentUpload({
  setUpdatedData,
  uploadedData,
  leadId,
  status,
  document,
  content,
}) {
  const [updatedCode, setUpdatedCode] = useState([]);
  const [filesUrl, setFilesUrl] = useState("");
  const [attachment, setAttachment] = useState("");
  const [loc, setLoc] = useState("");
  const [index, setIndex] = useState(-1);
  const [currentLabel, setCurrentLabel] = useState("");

  const [change, setChange] = useState(false);

  const getIndex = (label, datas) => {
    let index = -1;
    datas.map((data, idx) => {
      if (String(data[idx].docName) === String(label)) index = idx;
    });
    return index;
  };
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

  location();

  // Webcam logic here
  const [modalIsOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState(null);
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("imgg", imageSrc);
    setImg(imageSrc);
  }, [webcamRef]);

  function openModal(label, idx) {
    setIndex(idx);
    setCurrentLabel(label);

    setIsOpen(true);
  }

  function closeModal() {
    setIndex(-1);
    setCurrentLabel("");
    setIsCapturingVideo(false);
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      width: "100%",
      height: "80%",
      top: "60%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding:"0px"
    },
  };

  function getUserMediaWithConstraints(videoConstraints) {
    return navigator.mediaDevices.getUserMedia({ video: videoConstraints });
  }

  const [videoConst,setVideoConst]=useState({
    width: 1280,
    height: 720,
    facingMode: "user", 
  });
  
 
  const updateVideoConstraints = () => {
    const isMobileView = window.innerWidth < 768;
    const updatedConstraints = isMobileView
      ? { width: 1280, height: 720, facingMode: "environment" } 
      : { width: 1280, height: 720, facingMode: "user" }; 

    setVideoConst(updatedConstraints);
  };

  useEffect(() => {
    getUserMediaWithConstraints(videoConst)
      .then((stream) => {
        const videoElement = document.getElementById('videoElement');
        videoElement.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  }, [videoConst]);

  
  const [capturedImage, setCapturedImage] = useState([]);
  const [capturedVideo, setCapturedVideo] = useState([]);
  const [isCapturingVideo, setIsCapturingVideo] = useState(false);
  const [modalDocName, setModalDocName] = useState("");
  const [capturedMedia, setCapturedMedia] = useState({});
  const [uploadedFileName, setUploadedFileName] = useState("");

  const [isImage, setIsImage] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  const [uploadedUrl, setUploadedUrl] = useState("");

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);


  const [webcamOpened, setWebcamOpened] = useState(false);
  const [isCapturingEnabled, setIsCapturingEnabled] = useState(false);


  const handleWebcamOpen = () => {
    setWebcamOpened(true);
    setIsCapturingEnabled(true);
  };
  function generateRandomFileName(extension) {
    const currentDate = new Date();
    const formattedDate = currentDate
      .toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replace(/\//g, ""); // Remove slashes from the date

    const formattedTime = currentDate
      .toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      .replace(/:/g, ""); // Remove colons from the time

    const randomString = Math.random().toString(36).substring(7); // Generate a random string

    if (extension === "jpg")
      return `image_${formattedDate}_${formattedTime}_${randomString}.${extension}`;

    return `video_${formattedDate}_${formattedTime}_${randomString}.${extension}`;
  }

  const uploadFiles = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const payload = {
      file: uploadedUrl,
      name: uploadedFileName,
      token: userInfo[0].Token,
    };
    location();
    const currentDate = new Date();

    axios
      .post("/api/uploadFile", payload)
      .then((res) => {
        console.log(res.data.userData.Location);

        const uploaded_Url = res.data.userData.Location;

        const newUploadData = {
          docName: currentLabel,
          index: index,
          leadId: leadId,
          data: [
            {
              name: uploadedFileName,
              thumbnail_url: uploaded_Url,
              url: uploaded_Url,
              location: loc,
              time: currentDate,
            },
          ],
        };
        let oldData = uploadedData;
        oldData.push(newUploadData);
        setUpdatedData(oldData);
        console.log(oldData);
        // setUploadedUrl("");
        setChange(true);

        alert("Successfully uploaded!!");
        return res;
      })
      .catch((err) => {
        alert(err);
      });
    setIsOpen(false);
    setUploadedUrl("");
    setIsImage(false);
    setIsVideo(false);
    setUploadedFileName("");
  };

  const handleUploadImage = async () => {
    try {
      const imageSrc = webcamRef.current.getScreenshot();
      const name = generateRandomFileName("jpg");

      setUploadedUrl(imageSrc);
      setUploadedFileName(name);
      setIsImage(true);
    } catch (error) {
      console.error("Error handling upload:", error);
    }
  };

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const changeCameraConstraints = ()=>{
    if(videoConst.facingMode === "user"){
      setVideoConst({
        height:videoConst.height,
        width:videoConst.width,
        facingMode:"environment"
      });
    }
    else{
        setVideoConst({
          height:videoConst.height,
          width:videoConst.width,
          facingMode:"user"
        });
    }
  }

  const handleUploadVideo = () => {
    try {
      if (!isCapturingVideo) {
        // Start capturing video
        setIsCapturingVideo(true);
        setCapturedVideo(null);
        chunksRef.current = []; // Reset chunks
        const videoConstraints = {
          width: 1280,
          height: 720,
          facingMode: "user", // or 'environment' for rear camera
        };

        const mediaRecorder = new MediaRecorder(webcamRef.current.stream);
        console.log("MEdia", mediaRecorder);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const blob = new Blob(chunksRef.current, { type: "video/webm" });
          console.log("Blob>>", blob);
          const videoUrl = URL.createObjectURL(blob);
          const name = generateRandomFileName("mp4");

          blobToBase64(blob)
            .then((res) => {
              console.log(res);
              setUploadedUrl(res);
              setUploadedFileName(name);
              setIsVideo(true);
            })
            .catch((err) => {
              alert(err);
            });
        };
        
        mediaRecorder.start();
      } else {
        // Stop capturing video
        mediaRecorderRef.current.stop();
        setIsCapturingVideo(false);
      }
    } catch (error) {
      console.error("Error handling upload:", error);
    }
  };

  const checkWithinTheContent = (row) => {
    const present = content.includes(row.doc_name);

    return present;
  };

  const checkAlreadyDone = (label) => {
    let isPresent = false;
    // console.log(label,document)
    document.map((temp, index) => {
      if (String(temp.DocumentName) === String(label)) {
        isPresent = true;
      }
    });
    return isPresent;
  };

  const checkId = (status, row) => {
    if (status?.Status === 1 && Number(row.serial_num) <= 10) return true;
    return false;
  };
  const checkIsUploaded = (label) => {
    // console.log(uploadedData);
    let selectedField = {};
    uploadedData.map((data, idx) => {
      if (String(label) === String(data.docName)) {
        selectedField = data;
      }
    });

    return selectedField;
  };

  const uploadCancelHandler = () => {
    setUploadedUrl("");
    setUploadedFileName("");
    setIsCapturingVideo(false);
  };

  useEffect(() => {
    // Update video constraints when the window is resized
    window.addEventListener('resize', updateVideoConstraints);

    return () => {
      window.removeEventListener('resize', updateVideoConstraints);
    };
  }, []);


  useEffect(() => {
    console.log(uploadedData);
    const getData = () => {
      const tempData = [];
      data.map((row, index) => {
        const isUploaded = checkIsUploaded(row.doc_name);
        const isDone = checkAlreadyDone(row.doc_name);
        const isAccordingToStatus = content
          ? checkWithinTheContent(row)
          : checkId(status, row);
        console.log(isAccordingToStatus);
        if (!isDone && isAccordingToStatus) {
          const updatedRow = {
            _id: index + 1,
            serial_num: row.serial_num,
            doc_name: row.doc_name,
            files: uploadedData.map((file, idx) => {
              if (file.docName === row.doc_name) {
                return (
                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                    key={idx}
                  >
                    <Image
                      src={file.data[0].thumbnail_url}
                      width={90}
                      height={90}
                    />
                    <a>{file.data[0].name}</a>
                    <div className="row">
                      <div className="col-lg-12">
                        <a
                          className="btn btn-color w-25"
                          href={file.data[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View"
                        >
                          <span className="flaticon-view"></span>
                        </a>
                        <button
                          className="btn btn-color w-25"
                          title="Remove"
                          style={{ marginLeft: "5px" }}
                        >
                          <span className="flaticon-garbage fs-6"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }),
            action: (
              <div>
                <div className="">
                  <button
                    className="btn btn-color w-100"
                    style={{}}
                    onClick={() => openModal(row.doc_name, index)}
                    title="Upload File"
                  >
                    <span className="">
                      {" "}
                      <FaUpload />
                    </span>
                  </button>
                </div>
              </div>
            ),
          };

          tempData.push(updatedRow);
        }
      });
      return tempData;
    };
    // getData();
    setChange(false);
    setUpdatedCode(getData());
  }, [uploadedData, change, document]);

  useEffect(() => {
    if (uploadedData) {
      console.log(uploadedData);
    }
  }, [uploadedData]);

  // console.log(uploadedData);

  return (
    <>
      <SmartTable
        title="Documents Upload"
        data={updatedCode}
        headCells={headCells}
      />

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12 text-end mb-1">
              <button
                className="btn flaticon-close w-25 bg-danger text-light"
                onClick={closeModal}
              ></button>
            </div>
            <Webcam
              style={{ marginLeft: "" }}
              audio={false}
              height={300}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={1280}
              onUserMedia={() => handleWebcamOpen()}
              videoConstraints={videoConst}
            />
          </div>
        </div>

        <div onClick={changeCameraConstraints}><img src="https://th.bing.com/th?id=OIP.UKGBmbTeRXuAeK4TtheaOAEsEs&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width={'20px'}/></div>

        {isImage && (
          <div>
            <h4 className="mt-4">Captured Image :</h4>
            <Image
              className="mb-3"
              src={uploadedUrl}
              alt="Captured Image"
              width={300}
              height={300}
            />
            <label className="mb-3">{uploadedFileName}</label>
          </div>
        )}

        {isVideo && (
          <div>
            <h4 className="mt-4">Captured Video:</h4>
            <video width="300" height="200" controls>
              <source src={uploadedUrl} type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <label>{uploadedFileName}</label>
          </div>
        )}
        {!uploadedUrl &&webcamOpened && isCapturingEnabled  ?( 
          <>
            <button
              className="btn btn-color w-100 mb-1"
              onClick={handleUploadImage}
            >
              Capture Image
            </button>
            <button
              className="btn btn-color w-100 p-1"
              onClick={handleUploadVideo}
            >
              {isCapturingVideo ? "Stop Capture Video" : "Start Capture Video"}
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-color w-100 mb-1"
              onClick={uploadCancelHandler}
            >
              Cancel
            </button>
            <button className="btn btn-color w-100 mb-1" onClick={uploadFiles}>
              Upload
            </button>
          </>
        )}
      </Modal>
    </>
  );
}
