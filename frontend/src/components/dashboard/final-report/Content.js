const formatDate = (dateString) => {
  const options = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };

  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

export const otherContent = ()=>{
  return 'No,As states by insured';
}

export const AssessmentContent = (claimServicingOffice, AllotmentDate, DateOfAccident, PlaceOfAccident) => {
  return `In accordance with the instructions received from <span style="font-weight: bold;">${claimServicingOffice}</span>
    dated <span style="font-weight: bold;">${AllotmentDate ? formatDate(AllotmentDate) : "-"}</span> I visited Inspected/Examined Online Video Uploaded By The Undersigned
    and inspected the subject vehicle, reported to have met with an accident on <span style="font-weight: bold;">${DateOfAccident ? formatDate(DateOfAccident) : "-"}</span> ${PlaceOfAccident ? PlaceOfAccident : "-"}.
    Loss was discussed with the repairer and finally settled as under subject to poky terms, conditions and approval of the Insurers keeping in view
    the cause & nature of accident.

    <span style="font-weight: bold;">Observations:</span> Subject with good condition overall, No Other damages except as mentioned above were observed over vehicle, Poke
    report of accident not carried out by Insured.
    `;
};

export const AccidentContent = (InsuredName) => {
  return `
    As filled in the claim form and discussion with the insured that on the day and time of accident, <storng>${InsuredName}
   </strong> was driving the subject vehicle. 
    `;
};

export const summaryNotes = (claim)=>{
  return `
  <ul>
    <li>01. The rates allowed above combination of authorised dealer prices.</li>
    <li>02. The cause, nature, and circumstances leading to the accident appear genuine, believable, and losses recommended/assessed are corroborating with this accident.</li>
    <li>03. The loss or damage or liability has arisen proximately caused by the insured perils.</li>
    <li>04. The prices are recommended exclusive of all taxes, duties, octroi etc.</li>
    <li>05. The used abbreviation as R.C. = Registration Certificate, D.L. = Driving License, N.A. = Not Allowed, R.A. = Repair Allowed, W&T = Wear & Tear, O.D. = Own Damaged, M.P. = Manipulated i.e. replaced by old material.</li>
    <li>06. Chassis No., As per RC: ${claim?.vehicleDetails?.ChassisNumber ? claim?.vehicleDetails?.ChassisNumber : 'N.A.'}, As per Policy: ${claim?.claimDetails?.PolicyNumber ? claim?.claimDetails?.PolicyNumber : 'N.A.'}, it is for your information please.</li>
    <li>07. The above said vehicle was reinspected by us after repair, now the vehicle is ready for roadworthy condition, all the parts replaced and all repair work done as per the final s/r.</li>
  </ul>`;
};
