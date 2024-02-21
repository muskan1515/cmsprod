import Link from "next/link";
import SmartTable from "./SmartTable";
import { useEffect, useState } from "react";
import JSZip from "jszip";
import { FaCross, FaDropbox, FaRedo, FaUpload } from "react-icons/fa";

const headCells = [
  {
    id: "serial_num",
    numeric: false,
    label: "S. No.",
    width: 10,
  },
  {
    id: "doc_name",
    numeric: false,
    label: "Document Name",
    width: 120,
  },
  {
    id: "date",
    numeric: false,
    label: "Uploaded On",
    width: 120,
  },
  // {
  //   id: "status",
  //   numeric: false,
  //   label: "Status",
  //   width: 120,
  // },
  {
    id: "file",
    numeric: false,
    label: "File",
    width: 150,
  },
  {
    id: "action",
    numeric: false,
    label: "Action",
    width: 50,
  },
];

let data = [
  {
    _id: "6144145976c7fe",
    serial_num: "1",
    doc_name: "Driving licence",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    status: "verified",
    file: "",
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "2",
    doc_name: "Certificate of registration",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    file: "",
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "3",
    doc_name: "Repair Estimate",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    file: "",
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "4",
    doc_name: "Claim form",
    file: "",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "5",
    doc_name: "Insurance policy",
    file: "",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "6",
    doc_name: "Damage vehicle photographs/video",
    file: "",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "7",
    doc_name: "Aadhar card",
    file: "",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "8",
    doc_name: "Pan card",
    file: "",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "9",
    doc_name: " Cancel cheque",
    file: "",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "10",
    doc_name: " Satisfaction voucher",
    file: "",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "11",
    doc_name: "Discharge voucher",
    file: "",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "12",
    doc_name: "Dismantle photographs",
    file: "",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "13",
    doc_name: "Reinspection photographs",
    file: "",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "14",
    doc_name: "Repair Invoice",
    file: "",
    action: (
      <button className="btn btn-thm">
        <FaUpload />
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
  {
    _id: "6144145976c7fe",
    serial_num: "15",
    doc_name: "Payment/cash receipt",
    file: "",
    action: (
      <button className="btn btn-thm" >
        <FaUpload/>
      </button>
    ),
    verify: (
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        required
        id="terms"
        style={{ border: "1px solid black" }}
      />
    ),
  },
];

export default function Exemple({ documents }) {
  const [updatedCode, setUpdatedCode] = useState([]);

  const onUploadHandler=(label,index,)=>{

  }


  const checkValue = (label) => {
    let requiredInfo = [];
    documents.map((doc, index) => {
      if (String(doc.DocumentName) === String(label)) {
        console.log(doc);
        if (doc.Photo1 !== "") {
          requiredInfo.push({
            name: doc.Attribute1,
            url: doc.Photo1,
          });
        }
        if (doc.Photo2 !== "") {
          requiredInfo.push({
            name: doc.Attribute2,
            url: doc.Photo2,
          });
        }
        if (doc.Photo3 !== "") {
          requiredInfo.push({
            name: doc.Attribute3,
            url: doc.Photo3,
          });
        }
        if (doc.Photo4 !== "") {
          requiredInfo.push({
            name: doc.Attribute4,
            url: doc.Photo4,
          });
        }
        if (doc.Photo5 !== "") {
          requiredInfo.push({
            name: doc.Attribute5,
            url: doc.Photo5,
          });
        }

        //  console.log(requiredInfo);
      }
    });

    return requiredInfo;
  };

  const [selectedFile, setSelectedFile] = useState([]);
  const handleFileInputChange = (e,idx) => {
    // Handle file input change logic
    console.log(idx);
    const selectedFileCurrent = e.target.files[0];
    let oldFiles = selectedFile;
    console.log(oldFiles);

    let currentIndex = {};
    oldFiles?.map((file,index)=>{
      if((file?.index)===idx){
        currentIndex=file;
      }
    });
    let newFile = {
      file:selectedFileCurrent,
      index:currentIndex?.index ? currentIndex?.index : idx
    };

    console.log(currentIndex)
    if(currentIndex){
      oldFiles[idx]=newFile
    }
    else{
      oldFiles.push(newFile);
    }
    console.log(selectedFile)
   setSelectedFile(oldFiles);
  };

  const getFileName = (idx)=>{
    let currentIndex = "";
    selectedFile.map((file,index)=>{
      if((file?.index)===idx){
        currentIndex=file?.file;
      }
    });
    return currentIndex
  }

  const handleButtonClick = () => {
    // Trigger file input click when button is clicked
    document.getElementById('fileInput').click();
  };

  const downloadAllFiles = async () => {
    try {
      const zip = new JSZip();

     
     

      documents.map((data, index) => {
        if (data.Attribute1 !== "") {
          const fileName = data.Attribute1;
          zip.file(fileName, data.Photo1, { binary: true });
        }
        if (data.Attribute2 !== "") {
          const fileName = data.Attribute2;
          zip.file(fileName, data.Photo2, { binary: true });
        }
        if (data.Attribute3 !== "") {
          const fileName = data.Attribute3;
          zip.file(fileName, data.Photo3, { binary: true });
        }
        if (data.Attribute4 !== "") {
          const fileName = data.Attribute4;
          zip.file(fileName, data.Photo4, { binary: true });
        }
        if (data.Attribute5 !== "") {
          const fileName = data.Attribute5;
          zip.file(fileName, data.Photo5, { binary: true });
        }
      });


      // console.log(zip);

      const content = await zip.generateAsync({ type: "blob" });

      // Triggering the download
      const a = document.createElement("a");
      const url = URL.createObjectURL(content);
      a.href = url;
      a.download = "downloadedFiles.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      alert("Successfully downloaded the zip!");
    } catch (error) {
      console.error("Error during download:", error);
      alert("Error during download. Please try again.");
    }
  };



  let tempCode = [];
  useEffect(() => {
    data.map((docs, index) => {
      const allInfo = checkValue(docs.doc_name);
      const fileName = getFileName(index);
      const alllinks = (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {allInfo?.map((info, idx) => (
            <a href={info.url} key={idx} target="_blank">
              {info.name}
            </a>
          ))}
        </div>
      );

      const temp = {
        _id: docs._id,
        serial_num: docs.serial_num,
        doc_name: docs.doc_name,
        file: alllinks,
        action: <>
        <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e)=>handleFileInputChange(e,index)} ></input>
        <button className="btn btn-thm" onClick={handleButtonClick}
        >
        <FaUpload /></button>
        <p>{ fileName? `Selected File: ${fileName?.name}` : "Choose File"}</p>

        
        </>,
        verify: docs.verify,
      };

      tempCode.push(temp);
    });
    // data = tempCode;
    setUpdatedCode(tempCode);
  }, [documents]);

  return (
    <SmartTable
      title="Customer Documents"
      data={updatedCode}
      headCells={headCells}
      downloadAllFiles={downloadAllFiles}
    />
  );
}
