

 const emailHandler=(val)=>{

    if(val === 1){
        return `
        1. Driving Licence
        2. Certificate of registration
        3. Repair Estimate
        4. Claim form
        5. Insurance policy
        6. Damage vehicle photographs/video
        7.Aadhar Card
        8. Pan Card
        9. Cancel Cheque
        10. Satisfaction voucher
        `
    }
    return '';
}
module.exports = emailHandler;