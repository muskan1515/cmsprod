import SmartTable from "./ManualUploadTabular";
import { useEffect, useState } from "react";
import JSZip from "jszip";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import AWS from "aws-sdk";
import {
  getAllLabelLinks,
  getIndex,
  getFileNameFromUrl,
  location,
  getFileName,
} from "./functions/ManualUploadFunctions";
import { ManualUploadHeaders, ManualUploadLabelData } from "./DataHeaders";

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_AWS_REGION,
});

const S3_BUCKET = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;

const REGION = process.env.NEXT_PUBLIC_AWS_REGION;
const myBucket = new AWS.S3({ params: { Bucket: S3_BUCKET }, region: REGION });

export default function ManualUploadTabularView({ finalDisable, documents, leadId }) {
  const [updatedCode, setUpdatedCode] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [data, setData] = useState(ManualUploadLabelData);
  const [disable, setDisable] = useState(false);

  const [isAdded, setIsAdded] = useState(false);

  const [newLabel, setNewLabel] = useState("");

  const [currentDoc, setCurrentDoc] = useState("");

  const [changes, setChanges] = useState(false);

  const [loc, setLoc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setUploadedFiles(documents);
  }, [documents]);

  useEffect(() => {
    axios
      .get("/api/getDocumentListLabels", {
        params: {
          leadId: leadId,
        },
      })
      .then((res) => {
        const tempAllDocsLabel = res.data.data.results;
        const allLabelCount = LabelData.length;
        let newAddOnLabels = [];

        LabelData.map((data, index) => {
          newAddOnLabels.push(data);
        });

        tempAllDocsLabel.map((doc, index) => {
          const newLabel = {
            _id: allLabelCount + 1,
            serial_num: allLabelCount + 1,
            doc_name: doc.DocumentName,
          };
          newAddOnLabels.push(newLabel);
        });

        setData(newAddOnLabels);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [documents]);

  location(setLoc);

  const addNewLabel = () => {
    const paylaod = {
      leadId: leadId,
      DocumentName: newLabel,
    };

    toast.loading("Adding new Document Label!");
    axios
      .post("/api/addDocumentLabel", paylaod)
      .then((res) => {
        toast.dismiss();
        toast.success("Successfully added the document !!", {
          className: "toast-loading-message",
        });
        window.location.reload();
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Caught into Error ! Try Again.", {
          className: "toast-loading-message",
        });
      });
  };

  let docCurrentName = "Driving license";
  useEffect(() => {
    setCurrentDoc(docCurrentName);
  }, [docCurrentName]);

  function generateFilename(name) {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var day = ('0' + currentDate.getDate()).slice(-2);
    var hours = ('0' + currentDate.getHours()).slice(-2);
    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
    var seconds = ('0' + currentDate.getSeconds()).slice(-2);
    var filename = name + '_' + year + month + day + hours + minutes + seconds;
    return filename;
}

  const handleFileInputChange = async (e, idx, docs) => {
    location(setLoc);

    setDisable(true);

    const selectedFileCurrent = e.target.files[idx];

    const params = {
      ACL: "public-read",
      Body: selectedFileCurrent,
      Bucket: S3_BUCKET,
      Key: selectedFileCurrent.name,
      ContentType: "image/jpeg",
      ContentDisposition: "inline",
    };

    myBucket.putObject(params).send((err, data) => {
      if (err) {
        console.log("errorr", err);
        toast.error("Error while uploading!!");
      } else {
        const S3_URL = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${encodeURIComponent(
          generateFilename(selectedFileCurrent.name)
        )}`;

        const payloadMain = {
          leadId: leadId,
          docName: docCurrentName,
          data: [
            {
              name: selectedFileCurrent.name,
              url: S3_URL,
              Timestamp: new Date(),
              Location: loc,
            },
          ],
        };

        toast.loading("Uploading files!!", {
          className: "toast-loading-message",
        });
        axios
          .post("/api/uploadManualDocument", payloadMain, {
            headers: {
              Authorization: `Bearer ${""}`,
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            toast.dismiss();
            toast.success("Successfully updated !", {
              className: "toast-loading-message",
            });
            let oldFiles = uploadedFiles;

            const index = getIndex(docCurrentName, oldFiles);
            const currentTimeStamp = new Date();

            if (index !== -1) {
              const oldFile = oldFiles[index];
              const oldData = oldFile.data;
              oldData.push({
                name: getFileNameFromUrl(S3_URL),
                url: res.data.userData,
                Timestamp: currentTimeStamp,
                Location: loc,
              });
              const newUpload = {
                leadId: leadId,
                docName: docCurrentName,
                data: oldData,
              };
              oldFiles[index] = newUpload;
              setChanges(true);
              setUploadedFiles(oldFiles);
            } else {
              let newData = [];
              newData.push({
                name: getFileNameFromUrl(S3_URL),
                url: S3_URL,
                Timestamp: currentTimeStamp,
                Location: loc,
              });
              const newUpload = {
                leadId: leadId,
                docName: docCurrentName,
                data: newData,
              };
              const oldFiles = uploadedFiles;
              oldFiles.push(newUpload);
              setChanges(true);
              setUploadedFiles(oldFiles);
            }
          })
          .catch((err) => {
            toast.dismiss();
            toast.error("Try Again!!");
          });
      }
    });

    setDisable(false);
  };

  const handleButtonClick = (doc_name) => {
    setDisable(true);
    docCurrentName = doc_name;
    document.getElementById("fileInput").click();
  };

  const onSubmitHandler = () => {
    setDisable(true);

    const tempArray = [];
    uploadedFiles.map((file, index) => {
      const data = file.data;

      const uploadData = [];
      data?.map((temp, idx) => {
        if (temp?.upload && temp.upload === true) {
          uploadData.push({
            name: temp.name,
            url: temp.url,
            Timestamp: temp.Timestamp,
            Location: temp.Location,
          });
        }
      });

      if (uploadData.length > 0) {
        tempArray.push({
          leadId: file.leadId,
          docName: file.docName,
          data: uploadData,
        });
      }
    });

    if (tempArray.length <= 0) {
      toast.error("No Data to be uploaded!!");
    } else {
      const payload = JSON.stringify({ data: tempArray });

      toast.loading("Uploading files!!", {
        className: "toast-loading-message",
      });
      axios
        .post("/api/uploadDocument", payload, {
          headers: {
            Authorization: `Bearer ${""}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          toast.dismiss();
          toast.success("Successfully updated !", {
            className: "toast-loading-message",
          });
          window.location.reload();
        })
        .catch((err) => {
          toast.dismiss();
          toast.error("Try Again!!");
        });
    }
    setDisable(false);
  };

  const openModal = (setIsModalOpen) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const downloadAllFiles = async () => {
    try {
      const zip = new JSZip();
      for (const file of uploadedFiles) {
        const data = file.data;
        if (file.data) {
          for (const docFile of data) {
            const fileName = docFile.name;
            const path = docFile.url;
            const response = await fetch(path);
            const blob = await response.blob();
            zip.file(decodeURIComponent(fileName), blob, { binary: true });
          }
        }
      }

      const content = await zip.generateAsync({ type: "blob" });

      const a = document.createElement("a");
      const url = URL.createObjectURL(content);
      a.href = url;
      a.download = "downloadedFiles.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast.success("Successfully downloaded the zip!");
    } catch (error) {
      console.log("Error during download:", error);
      toast.error("Error during download. Please try again.");
    }
  };

  let tempCode = [];
  useEffect(() => {
    setChanges(false);
    data.map((docs, index) => {
      const allInfo = getAllLabelLinks(docs.doc_name, uploadedFiles);
      const fileName = getFileName(index,selectedFile);
      const alllinks = (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {allInfo?.map((info, idx) => (
            <a href={info.url} key={idx} target="_blank">
              {decodeURIComponent(info.name)}
            </a>
          ))}
        </div>
      );
      const temp = {
        _id: docs._id,
        serial_num: docs.serial_num,
        doc_name: docs.doc_name,
        file: alllinks,
        action: (
          <>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => handleFileInputChange(e, index, docs.doc_name)}
            ></input>
            <button
              disabled={finalDisable}
              className="btn btn-thm"
              onClick={() => handleButtonClick(docs.doc_name)}
            >
              <FaUpload />
            </button>
            <p>
              {fileName ? `Selected File: ${fileName?.name}` : "Choose File"}
            </p>
          </>
        ),
        verify: docs.verify,
      };

      tempCode.push(temp);
    });
    // data = tempCode;
    setUpdatedCode(tempCode);
  }, [documents, uploadedFiles, changes]);

  return (
    <SmartTable
      title="Customer Documents"
      data={updatedCode}
      headCells={ManualUploadHeaders}
      disable={disable}
      downloadAllFiles={downloadAllFiles}
      onSubmitHandler={onSubmitHandler}
      addNewLabel={addNewLabel}
      setNewLabel={setNewLabel}
      closeModal={closeModal}
      openModal={openModal}
      isModalOpen={isModalOpen}
    />
  );
}
