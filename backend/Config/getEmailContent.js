

 const emailHandler=(val)=>{

    if(val === 1){
        return `
        1. Driving Licence
        2. Certificate of registration
        3. Repair Estimate
        4. Claim form
        5. Insurance policy
        `
    }
    return '';
}
module.exports = emailHandler;