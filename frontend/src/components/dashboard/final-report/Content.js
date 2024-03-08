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
