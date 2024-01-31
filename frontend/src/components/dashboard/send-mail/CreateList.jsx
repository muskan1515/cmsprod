import React, { useState } from "react";
import { data } from "./data";
import axios from "axios";
import { useRouter } from "next/router";
// import { content } from "html2canvas/dist/types/css/property-descriptors/content";

const CreateList = ({ leadId, email, policyNo, Insured, vehicleNo }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [emailAddress, setEmailAddress] = useState(email ? email : "");
  const [policyNos, setPolicyNo] = useState(policyNo ? policyNo : "");
  const [date, setDate] = useState(new Date());

  const [fromEmail,setFromEmail]=useState('infosticstech@gmail.com');
  const [subject,setSubject]=useState('Survey Request for Vehicle Claim');
  const [body,setBody]=useState(` Dear Sir/Madam,

  Greeting from the MT Engineers Legal Investigator Pvt. Ltd.,

    We are Appointed for the survey of vehicle no.${vehicleNo}, Insured:${Insured} & Policy No.-${policyNo} on ${date} from the United India 
  Insurance co. Ltd., So we request you please provide the complete contact deatils & mails of Repairer/insured. So that we 
  can procedd further in your case and we also request 
  you to provide the following details as follows:-`);

  const router = useRouter();

  console.log(leadId, email, policyNo);
  const handleCheckboxChange = (id, value, checked) => {
    if (checked) {
      // If checked, add the item to the selectedItems list
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        { id, value },
      ]);
    } else {
      // If unchecked, remove the item from the selectedItems list
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item.id !== id)
      );
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // ... your existing code
  };

  const createStringFromSelectedItems = (selectedItems) => {
    return selectedItems
      .map((item, index) => {
        return `${index + 1}) ${item.value}`;
      })
      .join("\n");
  };
  const createStringFromSelectedItems2 = (selectedItems) => {
    return selectedItems
      .map((item, index) => {
        return `${item.value},`;
      })
      .join("");
  };

  const handleSubmit = () => {
    if(!(policyNos && policyNo) || !date){
      alert("All Marked field should be filled!!");
    }
    else if(!(email || emailAddress)){
      alert("Email is required field !!");
    }
    else{
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // /console.log(selectedItems);
    const payload = {
      toMail: emailAddress ? emailAddress : email,
      PolicyNo: policyNos ? policyNos : policyNo,
      Date: date ? date : new Date(),
      vehicleNo: vehicleNo,
      Insured: Insured,
      content: createStringFromSelectedItems(selectedItems),
      content2: createStringFromSelectedItems2(selectedItems),
      leadId: leadId,
      subject:subject,
      body:body,
      fromEmail:fromEmail
    };

    if(!payload.toMail || String(payload.toMail)==="None"  ){
      alert("Email is required field !!");
    }
    else if(!payload.PolicyNo){
      alert("PolicyNo is required field !!");
    }
    else if(!payload.content || !payload.content2){
      alert("Please select the documents to be passed over email!");
    }
    else{
  

    axios
      .post("/api/sendCustomEmail", payload, {
        headers: {
          Authorization: `Bearer ${userInfo[0].Token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert("Successfully sent!!");
        router.push(`/claim-details?leadId=${leadId}`);
      })
      .catch((Err) => {
        alert("Try again!");
      });
    }
  }
  };

  const [selectedOption, setSelectedOption] = useState("showDocument");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="col-lg-3">
          <label htmlFor="documentType">Select Option:</label>
          <select
            id="documentType"
            value={selectedOption}
            onChange={handleSelectChange}
            className="form-control"
          >
            <option value="showDocument">Send Documents</option>
            <option value="showInput">Send Documents -1</option>
          </select>
        </div>

        <div
          id="document-section"
          className="col-lg-12"
          style={{
            display: selectedOption === "showDocument" ? "block" : "none",
          }}
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="row mt-3 mb-1">
                <div className="col-lg-4 my_profile_setting_input form-group">
                  <label
                    htmlFor=""
                    className="text-color mt-1"
                    style={{
                      color: "#2e008b",
                      fontWeight: "",
                    }}
                  >
                    Type of Documents:
                  </label>
                </div>
                <div className="col-lg-8">
                  {data?.map((stat, index) => (
                    <div key={index} className="row">
                      <div className="col-lg-4">
                        <input
                          type="checkbox"
                          id={`checkbox-${index}`}
                          data-tokens="Status1"
                          value={stat.serial_num}
                          onChange={(e) =>
                            handleCheckboxChange(
                              stat.serial_num,
                              stat.doc_name,
                              e.target.checked
                            )
                          }
                        />
                      </div>
                      <div className="col-lg-8">
                        <label htmlFor={`checkbox-${index}`}>
                          {stat.doc_name}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4>Selected Items:</h4>
                <ul>
                  {selectedItems.map((item) => (
                    <li key={item.id}>{item.value}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="col-lg-12">
                <div className="row mt-3 mb-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
                    <label
                      htmlFor=""
                      className="text-color mt-1"
                      style={{
                        color: "#2e008b",
                        fontWeight: "",
                      }}
                    >
                      Email Address :
                    </label>
                  </div>
                  <div className="col-lg-7">
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="otherInput"
                      name="otherInput"
                      placeholder={email}
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row mt-3 mb-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
                    <label
                      htmlFor=""
                      className="text-color mt-1"
                      style={{
                        color: "#2e008b",
                        fontWeight: "",
                      }}
                    >
                      Policy No. :
                    </label>
                  </div>
                  <div className="col-lg-7">
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="otherInput"
                      name="otherInput"
                      placeholder={policyNo}
                      value={policyNos}
                      onChange={(e) => setPolicyNo(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row mt-3 mb-1">
                  <div className="col-lg-4 my_profile_setting_input form-group">
                    <label
                      htmlFor=""
                      className="text-color mt-2"
                      style={{
                        color: "#2e008b",
                        fontWeight: "",
                      }}
                    >
                      Date :
                    </label>
                  </div>
                  <div className="col-lg-7">
                    <input
                      required
                      type="date"
                      className="form-control"
                      id="otherInput"
                      name="otherInput"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row card">
                  <h4 className="col-12 text-center mt-1">Mail Box</h4>
                  <hr />
                  <div className="row" >
                    <h5 className="">To :</h5>
                    <input value={fromEmail} onChange={(e)=>setFromEmail(e.target.value)}/>
                  </div>
                  <hr />
                  <div className="row">
                    <h5 className="">Subject :</h5>
                    <input value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                  </div>
                  <hr />
                  <div className="row" style={{ height: "100px" }}></div>
                </div>
              </div>
              <textarea value={body} onChange={(e)=>setBody(e.target.value)}/>
              <div className="col-lg-12 text-end">
                <button className="btn btn-color w-10" onClick={handleSubmit}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          id="input-section"
          className="col-lg-12"
          style={{ display: selectedOption === "showInput" ? "block" : "none" }}
        >
          {/* Input section content */}
        </div>

        {/* Rest of your content */}
      </div>
    </>
  );
};

export default CreateList;
