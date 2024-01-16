import Link from "next/link";
import Image from "next/image";
import SmartTable from "./SmartTable";
import { useEffect } from "react";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

const headCells = [
  {
    id: "serial_num",
    numeric: false,
    label: "S.No.",
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
    label: "Date",
    width: 150,
  },
  {
    id: "files",
    numeric: false,
    label: "File Name",
    width: 150,
  },
  {
    id: "action",
    numeric: false,
    label: "Action",
    width: 50,
  },
  {
    id: "files",
    numeric: false,
    label: "Files",
    width: 150,
  },
  // {
  //   id: "files",
  //   numeric: false,
  //   label: "File Name",
  //   width: 150,
  // },
  // {
  //   id: "date",
  //   numeric: false,
  //   label: "Date",
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
  const [updatedCode, setUpdatedCode] = useState([]);
  const [filesUrl, setFilesUrl] = useState("");
  const [attachment, setAttachment] = useState("");

  const [uploadedData, setUploadedData] = useState([]);

  const [change, setChange] = useState(false);

  const getIndex = (label, datas) => {
    let index = -1;
    datas.map((data, idx) => {
      if (String(data[index].docName) === String(label)) index = idx;
    });
    return index;
  };
  const handleUpload = (result, label) => {
    try {
      const fileUrl = result.info.secure_url;

      const index = getIndex(label, uploadedData);
      console.log(index);
      if (index === -1) {
        const newUploadData = {
          docName: label,
          data: [
            {
              name: result.info.original_filename + "." + result.info.format,
              thumbnail_url: result.info.thumbnail_url,
              url: result.info.url,
            },
          ],
        };

        let oldData = uploadedData;
        oldData.push(newUploadData);
        setUploadedData(oldData);
        setChange(true);
      } else {
        let oldData = uploadedData;
        let wholeDocData = uploadedData[index].data;

        wholeDocData.push({
          name: result.info.original_filename + "." + result.info.format,
          thumbnail_url: result.info.thumbnail_url,
          url: result.info.url,
        });

        oldData[index].data = wholeDocData;
        console.log(oldData);
        setUploadedData(oldData);
        setChange(true);
      }
    } catch (error) {
      console.error("Error handling upload:", error);
    }
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
  useEffect(() => {
    console.log(uploadedData);
    const getData = () => {
      const tempData = [];
      data.map((row, index) => {
        const isUploaded = checkIsUploaded(row.doc_name);
        console.log(isUploaded.data, row.doc_name);
        const updatedRow = {
          _id: index + 1,
          serial_num: row.serial_num,
          doc_name: row.doc_name,
          files: isUploaded?.data?.map((file) => {
            return (
              <div
                style={{ display: "flex", flexDirection: "column" }}
                key={idx}
              >
                <Image src={file.thumbnail_url} width={90} height={90} />
                <h4>{file.name}</h4>

                {/*  <CldUploadWidget
            onUpload={(result)=>handleUpload(result,row.doc_name,true)}
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
                 Dele
                </button>
              </div>
            )}
          </CldUploadWidget>*/}
                <a
                  className="btn btn-color profile_edit_button mb-5"
                  href={isUploaded.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
                <button className="btn btn-color profile_edit_button mb-5">
                  Delete
                </button>
              </div>
            );
          }),
          action: (
            <CldUploadWidget
              onUpload={(result) => handleUpload(result, row.doc_name)}
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
                  "pdf",
                ], // Specify allowed formats
                maxFiles: 50,
              }}
            >
              {({ open }) => (
                <div>
                  <button
                    className="btn btn-color w-100"
                    style={{}}
                    onClick={() => open()}
                  >
                    Upload Files
                  </button>
                </div>
              )}
            </CldUploadWidget>
          ),
        };
        tempData.push(updatedRow);
      });
      return tempData;
    };
    // getData();
    setChange(false);
    setUpdatedCode(getData());
  }, [uploadedData, change]);

  useEffect(() => {
    if (uploadedData) {
      console.log(uploadedData);
    }
  }, [uploadedData]);
  console.log(uploadedData);

  return (
    <SmartTable
      title="Documents Upload"
      data={updatedCode}
      headCells={headCells}
    />
  );
}
