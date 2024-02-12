import React from 'react';

const InsuranceReport = ({allInfo}) => {
  const currentDate = new Date();

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };

  const formatJustDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric"
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };

  const formatTime = (dateString) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };

  return (
    <div>
      <img style={{ position: 'absolute', top: '1.71in', left: '0.32in', width: '8.54in', height: '0.02in' }} src="vi_1.png" />
      <img style={{ position: 'absolute', top: '2.93in', left: '0.54in', width: '8.16in', height: '0.02in' }} src="vi_2.png" />
      <img style={{ position: 'absolute', top: '1.74in', left: '0.32in', width: '8.55in', height: '0.02in' }} src="vi_3.png" />
      <img style={{ position: 'absolute', top: '5.13in', left: '0.57in', width: '8.13in', height: '0.02in' }} src="vi_4.png" />
      <img style={{ position: 'absolute', top: '8.05in', left: '0.54in', width: '8.16in', height: '0.02in' }} src="vi_5.png" />
      <img style={{ position: 'absolute', top: '10.03in', left: '0.54in', width: '8.17in', height: '0.02in' }} src="vi_6.png" />
      <img style={{ position: 'absolute', top: '11.23in', left: '0.32in', width: '8.53in', height: '0.02in' }} src="vi_7.png" />

      <div style={{ position: 'absolute', top: '0.32in', left: '0.41in', width: '2.29in', lineHeight: '0.43in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '21pt', fontFamily: 'Arial', color: '#17365d' }}>MUTNEJA Tech</span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '21pt', fontFamily: 'Arial', color: '#17365d' }}> </span><br />
      </div>

      <div style={{ position: 'absolute', top: '0.74in', left: '0.41in', width: '6.75in', lineHeight: '0.21in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '10pt', fontFamily: 'Calibri', color: '#000000' }}>Insurance Surveyors and Loss Assessors Pvt. Ltd.</span><br />
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '10pt', fontFamily: 'Calibri', color: '#000000' }}>Mobile : 9910995122(DLH NCR),9468881222(GURUGRAM),9414088243,6378710966,7597233966(RAJASTHAN)</span><br />
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '10pt', fontFamily: 'Calibri', color: '#000000' }}>Email:  Info@mutnejatech.co.in</span><br />
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '10pt', fontFamily: 'Calibri', color: '#000000' }}>Lic No.  Lic No.  IRDA/CORP/SLA-200018 DOE 07.02.2025</span><br />
      </div>

      <div style={{ position: 'absolute', top: '1.82in', left: '0.54in', width: '2.03in', lineHeight: '0.16in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}>Ref No. : </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> MSL/HMH/2024/11/10043 </span><span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>

      <div style={{ position: 'absolute', top: '2.18in', left: '2.94in', width: '4.03in', lineHeight: '0.16in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}>{allInfo?.otherInfo[0]?.SurveyType} {allInfo?.otherInfo[0]?.InspectionType} SURVEY REPORT ({allInfo?.otherInfo[0]?.SettlementType})- (NIL DEPRECIATION)</span><span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>

      <div style={{ position: 'absolute', top: '1.84in', left: '7.72in', width: '0.97in', lineHeight: '0.16in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}>Date : </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{formatDate(currentDate)}</span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '0.27in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>This </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '0.61in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>report </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '1.06in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>is </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '1.25in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>issued </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '1.71in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>by </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '1.95in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>me/us </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '2.41in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>as </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '2.64in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>a </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '2.82in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>licensed </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '3.37in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Surveyor(s) </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '4.13in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>without </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '4.65in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>prejudice </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '5.27in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>in </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '5.48in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>respect </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '6.00in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>of </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '6.33in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>cause, </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '6.79in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>nature </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '7.26in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>and </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.16in' }}>
        <div style={{ position: 'relative', left: '7.58in' }}>
          <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>extent </span>
        </div><br/>
      </div>

      <div style={{ position: 'absolute', top: '2.53in', left: '0.54in', width: '8.15in', lineHeight: '0.17in' }}>
      <div style={{ position: 'relative', left: '8.04in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>of </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>
        loss/damages and subject to the terms and conditions of the insurance policy. loss/damages and subject to the terms and conditions of the insurance policy.{' '}
      </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '2.99in', left: '0.54in', width: '1.61in', lineHeight: '0.26in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '7pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}>INSURANCE PARTICULARS : </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '7pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}> </span><br />
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(a) Policy / Cover Note No. </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(b) Period of Insurance </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      {/* Add other insurance particulars as needed */}
    </div>

    <div style={{ position: 'absolute', top: '3.21in', left: '2.45in', width: '3.77in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>:   </span><br />
    </div>

    <div style={{ position: 'absolute', top: '3.21in', left: '2.45in', width: '3.77in', lineHeight: '0.16in' }}>
      <div style={{ position: 'relative', left: '0.12in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}> </span>
      </div><br />
    </div>

    <div style={{ position: 'absolute', top: '3.45in', left: '2.45in', width: '3.77in', lineHeight: '0.18in' }}>
      <div style={{ position: 'relative', left: '3.19in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Claim No.</span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>  : - {allInfo?.otherInfo[0]?.ClaimNumber} </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>:  -{formatDate(allInfo?.otherInfo[0]?.PolicyPeriodStart)} to {formatDate(allInfo?.otherInfo[0]?.PolicyPeriodEnd)} </span><br />
    </div>

    <div style={{ position: 'absolute', top: '3.45in', left: '6.46in', width: '0.13in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: - </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '3.21in', left: '2.45in', width: '3.77in', lineHeight: '0.19in' }}>
      <div style={{ position: 'relative', left: '3.19in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>IDV</span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: {allInfo?.otherInfo[0]?.PolicyNumber}  </span><br />
    </div>

    <div style={{ position: 'absolute', top: '3.21in', left: '6.46in', width: '0.83in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>:  </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'rupi-foradian', color: '#000000' }}>F </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> {allInfo?.otherInfo[0]?.IDV} </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '3.43in', left: '2.45in', width: '3.77in', lineHeight: '0.16in' }}>
      <div style={{ position: 'relative', left: '0.82in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}>   </span>
      </div><br />
    </div>

    <div style={{ position: 'absolute', top: '3.43in', left: '2.45in', width: '3.77in', lineHeight: '0.16in' }}>
      <div style={{ position: 'relative', left: '1.03in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>   </span>
      </div><br />
    </div>

    <div style={{ position: 'absolute', top: '4.05in', left: '2.60in', width: '3.78in', lineHeight: '0.16in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>
      330303- Branch Hanumangarh Sri Ganganagar Road, Hanumangarh{' '}
    </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>

  <div style={{ position: 'absolute', top: '3.65in', left: '2.45in', width: '3.77in', lineHeight: '0.18in' }}>
    <div style={{ position: 'relative', left: '3.20in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Token No. </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: {allInfo?.otherInfo[0]?.InsuranceCompanyNameAddress}</span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>

  <div style={{ position: 'absolute', top: '3.65in', left: '6.48in', width: '0.13in', lineHeight: '0.16in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: -  </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>

  <div style={{ position: 'absolute', top: '4.72in', left: '2.45in', width: '0.94in', lineHeight: '0.20in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>:  - {allInfo?.otherInfo[0]?.HPA}</span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>:  330300- SGNR </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>

  <div style={{ position: 'absolute', top: '4.48in', left: '2.60in', width: '3.76in', lineHeight: '0.16in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>
      VPO Dabli Kalan, Teh. Tibbi, Distt. Hanumangarh Rajasthan 335512{' '}
    </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>

  <div style={{ position: 'absolute', top: '4.28in', left: '2.45in', width: '3.04in', lineHeight: '0.16in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>
      :  Ramesh Kumar S/o Dulichand Godara (9950078225){' '}
    </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>

  <div style={{ position: 'absolute', top: '5.47in', left: '0.54in', width: '1.61in', lineHeight: '0.19in' }}>
    <div style={{ position: 'relative', left: '0.27in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Registered Number </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(b) </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>

  <div style={{ position: 'absolute', top: '5.47in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>

  <div style={{ position: 'absolute', top: '5.69in', left: '0.54in', width: '1.61in', lineHeight: '0.16in' }}>
    <div style={{ position: 'relative', left: '0.27in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Registered Owner </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>
  </div>

  <div style={{ position: 'absolute', top: '5.69in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>

  <div style={{ position: 'absolute', top: '5.24in', left: '3.98in', width: '1.65in', lineHeight: '0.21in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>
        Verified From Original{' '}
      </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}>{allInfo?.otherInfo[0]?.RegisteredOwner}</span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{allInfo?.otherInfo[0]?.InsuredName} {allInfo?.otherInfo[0]?.InsuredMobileNo1} {allInfo?.otherInfo[0]?.InsuredAddress}</span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{allInfo?.otherInfo[0]?.OwnerSerialNo}</span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{formatDate(allInfo?.otherInfo[0]?.DateOfregistration)}</span>
      <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}>{allInfo?.otherInfo[0]?.ChassisNumber}</span>
      <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}>{allInfo?.otherInfo[0]?.EngineNumber}</span>
      <br />
    </div>

    <div style={{ position: 'absolute', top: '5.88in', left: '0.54in', width: '2.14in', lineHeight: '0.18in' }}>
      <div style={{ position: 'relative', left: '0.27in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Owner Serial No. / Transfer Date </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(c) </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '5.88in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.08in', left: '0.54in', width: '2.14in', lineHeight: '0.18in' }}>
      <div style={{ position: 'relative', left: '0.27in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Date of Registration </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(d) </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.08in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.29in', left: '6.41in', width: '1.21in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>( Physically Checked ) </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.78in', left: '3.98in', width: '2.63in', lineHeight: '0.20in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>
        {allInfo?.otherInfo[0]?.MakerModel}{' '}
      </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{allInfo?.otherInfo?.TypeOfBody} {allInfo?.otherInfo?.ClassOfVehicle} </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{allInfo?.otherInfo?.PreAccidentCondition}</span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{allInfo?.otherInfo?.SeatingCapacity} </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.77in', left: '0.54in', width: '2.14in', lineHeight: '0.18in' }}>
      <div style={{ position: 'relative', left: '0.27in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Make / Variant/ Model /Color </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(g) </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.77in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.53in', left: '0.54in', width: '2.14in', lineHeight: '0.20in' }}>
      <div style={{ position: 'relative', left: '0.27in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Engine Number </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(f) </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.53in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.29in', left: '0.54in', width: '2.14in', lineHeight: '0.20in' }}>
      <div style={{ position: 'relative', left: '0.27in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Chassis Number </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(e) </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.29in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.98in', left: '0.54in', width: '2.14in', lineHeight: '0.19in' }}>
      <div style={{ position: 'relative', left: '0.27in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Type of Body and Class of vehicle </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(h) </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '6.98in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '7.21in', left: '0.54in', width: '2.14in', lineHeight: '0.19in' }}>
      <div style={{ position: 'relative', left: '0.27in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Pre Accident Condition </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(k) </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '7.21in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '7.43in', left: '0.54in', width: '2.14in', lineHeight: '0.18in' }}>
      <div style={{ position: 'relative', left: '0.27in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Seating Capacity </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(l) </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '7.43in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '7.64in', left: '0.54in', width: '2.14in', lineHeight: '0.18in' }}>
      <div style={{ position: 'relative', left: '0.27in' }}>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{allInfo?.otherInfo?.CubicCapacity} </span>
        <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
      </div>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(m) </span>
      <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
    </div>

    <div style={{ position: 'absolute', top: '7.64in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '7.62in', left: '3.98in', width: '1.95in', lineHeight: '0.21in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>1120 CC </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{allInfo?.otherInfo[0]?.TaxParticulars}</span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{allInfo?.otherInfo[0]?.ModeOfCheck}</span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}>{allInfo?.otherInfo[0]?.RegisteredOwner}</span>
  <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '7.62in', left: '6.42in', width: '0.54in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Fuel Used </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '7.62in', left: '7.24in', width: '0.42in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: {allInfo?.otherInfo[0]?.FuelType} </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '7.85in', left: '0.54in', width: '2.14in', lineHeight: '0.21in' }}>
  <div style={{ position: 'relative', left: '0.27in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Tax particulars </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>
  <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '7pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}>DRIVER PARTICULARS : </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '7pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}> </span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(a) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '7.85in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '8.32in', left: '0.54in', width: '2.14in', lineHeight: '0.20in' }}>
  <div style={{ position: 'relative', left: '0.27in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Name of Driver </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>
  <div style={{ position: 'relative', left: '0.27in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Age</span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(b) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '8.32in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '8.53in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '8.53in', left: '3.98in', width: '1.28in', lineHeight: '0.25in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{allInfo?.otherInfo[0]?.Age}</span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}>{allInfo?.otherInfo[0]?.LicenseNumber} </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Tahoma-Bold', color: '#000000' }}> </span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>10-Dec-10</span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>DTO Hanumangarh </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>LMV, MCWG LMV, MCWG</span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>-</span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '8.76in', left: '0.54in', width: '2.14in', lineHeight: '0.20in' }}>
  <div style={{ position: 'relative', left: '0.27in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Motor Driver License Number </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>
  <div style={{ position: 'relative', left: '0.30in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Date of Issue </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> {allInfo?.otherInfo[0]?.DateOfIssue}</span><br />
  </div>
  <div style={{ position: 'relative', left: '0.30in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Valid from </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> {allInfo?.otherInfo[0]?.ValidFrom}</span><br />
  </div>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(c) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '8.76in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '9.63in', left: '0.54in', width: '2.14in', lineHeight: '0.19in' }}>
  <div style={{ position: 'relative', left: '0.27in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Type of License </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> {allInfo?.otherInfo[0]?.LicenseType}</span><br />
  </div>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(e) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '9.63in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '9.39in', left: '0.54in', width: '2.14in', lineHeight: '0.19in' }}>
  <div style={{ position: 'relative', left: '0.27in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Issuing Authority </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> {allInfo.otherInfo[0]?.IssuingAuthority}</span><br />
  </div>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(d) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '9.39in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '9.17in', left: '3.57in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '8.97in', left: '3.57in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '8.98in', left: '7.07in', width: '0.58in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>09-Dec-30</span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>
<div style={{ position: 'absolute', top: '8.97in', left: '5.56in', width: '0.93in', lineHeight: '0.18in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Valid upto (NTV) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> {allInfo?.otherInfo[0]?.ValidUntilNtv}</span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Valid upto (TV) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> {allInfo?.otherInfo[0]?.ValidUntilTv}</span><br />
</div>

<div style={{ position: 'absolute', top: '9.63in', left: '0.54in', width: '2.14in', lineHeight: '0.19in' }}>
  <div style={{ position: 'relative', left: '0.27in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Type of License </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(e) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '9.63in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '9.39in', left: '0.54in', width: '2.14in', lineHeight: '0.19in' }}>
  <div style={{ position: 'relative', left: '0.27in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Issuing Authority </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(d) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '9.39in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '9.17in', left: '3.57in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '8.97in', left: '3.57in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '8.98in', left: '7.07in', width: '0.58in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>09-Dec-30</span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '8.97in', left: '5.56in', width: '0.93in', lineHeight: '0.18in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Valid upto (NTV) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Valid upto (TV) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '10.30in', left: '0.54in', width: '2.14in', lineHeight: '0.19in' }}>
  <div style={{ position: 'relative', left: '0.27in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>Date & Time of Accident </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> {allInfo?.otherInfo[0]?.DateOfAccident}</span><br />
  </div>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>(b) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '10.30in', left: '3.54in', width: '0.04in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>: </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '10.34in', left: '3.98in', width: '2.36in', lineHeight: '0.16in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> {formatJustDate(allInfo?.otherInfo[0]?.DateOfAccident)}</span>
</div>

<div style={{ position: 'absolute', top: '10.34in', left: '3.98in', width: '2.36in', lineHeight: '0.20in' }}>
  <div style={{ position: 'relative', left: '1.19in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{formatTime(allInfo?.otherInfo[0]?.DateOfAccident)} </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  </div>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{allInfo?.otherInfo[0]?.PlaceOfLoss} </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}>{allInfo?.otherInfo[0]?.GarageNameAndAddress} </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '8pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '11.42in', left: '8.52in', width: '0.29in', lineHeight: '0.14in' }}>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '7pt', fontFamily: 'Tahoma', color: '#000000' }}>1 of 4 </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '7pt', fontFamily: 'Tahoma', color: '#000000' }}> </span><br />
</div>

<div style={{ position: 'absolute', top: '11.27in', left: '1.84in', width: '5.80in', lineHeight: '0.19in' }}>
  <div style={{ position: 'relative', left: '0.50in' }}>
    <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '9pt', fontFamily: 'Calibri-Bold', color: '#000000' }}>H.O. </span>
    <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '9pt', fontFamily: 'Calibri', color: '#000000' }}>Address  : 58-Gandhi Nagar,Near Bal Niketan School, Sri Ganganagar(Raj.)-335001</span>
    <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '9pt', fontFamily: 'Calibri-Bold', color: '#000000' }}> </span><br />
  </div>
  <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '9pt', fontFamily: 'Calibri-Bold', color: '#000000' }}>Office</span>
  <span style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '9pt', fontFamily: 'Calibri', color: '#000000' }}>: B-43,NFL Society,Sector-PI, Gr Noida-201310./ E-201,MAPSKO Mountville,Sector-79, Gurugram(Hr) </span>
  <span style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: '9pt', fontFamily: 'Calibri-Bold', color: '#000000' }}> </span><br />
</div>


    </div>
  );
};

export default InsuranceReport;
