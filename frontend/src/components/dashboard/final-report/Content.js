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

export const AssessmentContent = (claimServicingOffice, AllotmentDate, DateOfAccident,PlaceOfAccident) => {
  return `In accordance with the instructions received from ${claimServicingOffice ? claimServicingOffice :"-"}
    dated ${AllotmentDate ? formatDate(AllotmentDate) :"-"} I visited Inspected/Examined Online Video Uploaded By The Undersigned
    and inspected the ubject vehicle, reported to have met with an accident on ${DateOfAccident?formatDate(DateOfAccident):"-"}  ${PlaceOfAccident?PlaceOfAccident:"-"}.
    Loss was discussed with the repairer and finally settled as under subject to poky terms, conditions and approval of the Insurers keeping in view
    the cause & nature of accident.

    <span style={{fontWeight:"bold"}}>Observations:</span> Subject with good conditon overall , No Other damages except as mentioned above were observed over vehicle, Poke
    report of accident not carried out by Insured.
    `;
};

export const AccidentContent = (InsuredName) => {
  return `
    As filled in the claim form and discussion with the insured that on the day and time of accident, ${InsuredName}
    was driving the subject vehicle. 
    `;
};
