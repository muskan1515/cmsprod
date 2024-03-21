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
  
  
export const defaultContent = (type,vehicleNo,PolicyNo,Insured,date)=>{
    console.log("type",type)
    if(String(type) === '2'){
        return `
        Dear Sir/Madam,
  
        Greeting from the MT Engineers Legal Investigator Pvt. Ltd.,
    
        We are Appointed for the survey of vehicle no.-${vehicleNo}, Insured:-${Insured} & Policy No.-${PolicyNo} on ${formatDate(date)} and the approval
        is as follows;-
            1) What is the Status of the said vheicle
            2) How much time it will take to repair the vehicle
            3) Please provide UR & RI Snaps
            4) Invoice Bill duly signed & stamped of dealer
            5) Payment receipt duly signed & stamped of dealer
            6) Previous Year Policy
            7) Pan Card
            8) Please destory the items properly in the RI, Otherwise we will treat the part is repaired.

        `
    }
    else if(String(type) === '3'){
        return `Dear Sir/Madam,
  
        Greeting from the MT Engineers Legal Investigator Pvt. Ltd.,
    
          We are Appointed for the survey of vehicle no.-${vehicleNo}, Insured:-${Insured} & Policy No.-${PolicyNo} on ${formatDate(date)} and the approval
          is as follows;-
         Parts
         1) Fr Bumper- New Allowed
         2) FR Grill- New Allowed
         3) LH Head LIght- new Allowed
         4) LH Fender0- Repair Allowed
         Labour
         1) Fr Bumper- R/R-150, Painting-2500
         2) LH Head Light- R/R-100
         3) LH Fender- Denting-250, Painting-2200.`
    }
    else{
        return `Dear Sir/Madam,

        Greeting from the MT Engineers Legal Investigator Pvt. Ltd.,
    
        We are Appointed for the survey of vehicle no.${vehicleNo}, Insured:${Insured} & Policy No.-${PolicyNo} on ${formatDate(date)} from the United India 
        Insurance co. Ltd., So we request you please provide the complete contact deatils & mails of Repairer/insured. So that we 
        can procedd further in your case and we also request 
        you to provide the following details as follows:-`
    }
}