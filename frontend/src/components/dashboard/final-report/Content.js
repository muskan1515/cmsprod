const formatDate = (dateString) => {
  const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
  };

  const dateParts = new Date(dateString).toLocaleDateString("en-GB", options).split('/');
  const formattedDate = dateParts[0] + '-' + dateParts[1] + '-' + dateParts[2];
  return formattedDate;
};


function convertHtmlToString(htmlString) {
  // Create a new DOMParser
  const parser = new DOMParser();

  // Parse the HTML string
  const doc = parser.parseFromString(htmlString, 'text/html');

  // Extract the text content from the parsed document
  const plainText = doc.body.textContent || "";

  return plainText;
}

export const otherContent = () => {
  return 'No, as stated by insured';
};

export const AssessmentContent = (claimServicingOffice, AllotmentDate, DateOfAccident, PlaceOfAccident) => {
  console.log(claimServicingOffice,PlaceOfAccident,AllotmentDate,DateOfAccident)
  return (`In accordance with the instructions received from ${claimServicingOffice !== null ? `<strong>${claimServicingOffice}</strong>` : "N.A." }
    dated  ${AllotmentDate ? `<strong>${formatDate(AllotmentDate)}</strong>` : "-"} , I visited, inspected/examined online video uploaded by the undersigned,
    and inspected the subject vehicle. It was reported to have met with an accident on ${DateOfAccident ? `<strong>formatDate(DateOfAccident)</strong>` : "-"} at ${PlaceOfAccident ? `<strong>${PlaceOfAccident}</strong>` : "N.A."}.
    Loss was discussed with the repairer and finally settled as under, subject to policy terms, conditions, and approval of the insurers. This is done keeping in view
    the cause and nature of the accident. <br/>

    <strong>Observations:</strong> Subject with good condition overall. No other damages except as mentioned above were observed over the vehicle. Policy
    report of the accident was not carried out by the insured.`);
};

export const AccidentContent = (InsuredName) => {
  return  (`
    As filled in the claim form and discussion with the insured, on the day and time of the accident,  ${InsuredName !== null ? `<strong>${InsuredName}</strong>` : "-"}  was driving the subject vehicle.`);
};

export const summaryNotes = (claim) => {
  return 
  (`
  <ul>
    <li>01. The rates allowed above combination <br>
        of authorized dealer prices.</li>
    <li>02. The cause, nature, and circumstances <br>
        leading to the accident appear genuine, <br>
        believable, and losses recommended/assessed <br>
        are corroborating with this accident.<br></li>
    <li>03. The loss or damage or liability has arisen  <br> proximately caused by the insured perils. <br></li>
    <li>04. The prices are recommended exclusive of all taxes, duties, octroi etc.</li>
    <li>05. The used abbreviation as R.C. = Registration Certificate, D.L. = Driving License, N.A. = Not Allowed, R.A. = Repair Allowed, W&T = Wear & Tear, O.D. = Own Damaged, M.P. = Manipulated i.e. replaced by old material.</li>
    <li>06. Chassis No., As per RC: ${claim?.vehicleDetails?.ChassisNumber ? `<strong>${claim?.vehicleDetails?.ChassisNumber}</strong>` : 'N.A.'}, As per Policy: <strong>${claim?.claimDetails?.PolicyNumber ?`${claim?.claimDetails?.PolicyNumber}</strong>` : 'N.A.'}, it is for your information please.</li>
    <li>07. The above said vehicle was reinspected by us after repair. Now the vehicle is ready for roadworthy condition, and all the parts replaced and all repair work done as per the final survey report.</li>
  </ul>`);
};
