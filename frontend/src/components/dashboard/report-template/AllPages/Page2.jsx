import React from "react";

const MyFunctionalComponent = ({allInfo}) => {

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const formattedDate = new Date(dateString).toLocaleString("en-US", options);
    return formattedDate;
  };


  return (
    <div>
      <link rel="stylesheet" type="text/css" href="style.css" />
      <img
        style={{
          position: "absolute",
          top: "0.47in",
          left: "0.32in",
          width: "8.54in",
          height: "0.02in",
        }}
        src="vi_8.png"
      />
      <img
        style={{
          position: "absolute",
          top: "1.19in",
          left: "0.55in",
          width: "8.15in",
          height: "0.02in",
        }}
        src="vi_9.png"
      />
      <img
        style={{
          position: "absolute",
          top: "2.23in",
          left: "0.54in",
          width: "8.16in",
          height: "0.02in",
        }}
        src="vi_10.png"
      />
      <img
        style={{
          position: "absolute",
          top: "2.48in",
          left: "0.54in",
          width: "8.16in",
          height: "0.02in",
        }}
        src="vi_11.png"
      />
      <img
        style={{
          position: "absolute",
          top: "2.70in",
          left: "0.54in",
          width: "8.16in",
          height: "0.02in",
        }}
        src="vi_12.png"
      />
      <img
        style={{
          position: "absolute",
          top: "2.97in",
          left: "0.54in",
          width: "8.16in",
          height: "0.02in",
        }}
        src="vi_13.png"
      />
      <img
        style={{
          position: "absolute",
          top: "11.23in",
          left: "0.32in",
          width: "8.53in",
          height: "0.02in",
        }}
        src="vi_14.png"
      />
      <div
        style={{
          position: "absolute",
          top: "0.32in",
          left: "0.41in",
          width: "0.84in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          MUTNEJA Tech
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0.32in",
          left: "6.29in",
          width: "2.40in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          MSL/HMH/2024/11/10043{" "}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          -{" "}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
         {allInfo?.otherInfo[0]?.ClaimNumber}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0.52in",
          left: "0.54in",
          width: "2.39in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          (d){" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0.52in",
          left: "0.54in",
          width: "2.39in",
          lineHeight: "0.20in",
        }}
      >
        <div style={{ position: "relative", left: "0.27in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Date of Allotment of Survey
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          (e){" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0.52in",
          left: "3.54in",
          width: "0.04in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0.76in",
          left: "0.54in",
          width: "2.39in",
          lineHeight: "0.21in",
        }}
      >
        <div style={{ position: "relative", left: "0.27in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Date &amp; Time of Survey
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          (f){" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0.76in",
          left: "3.54in",
          width: "0.04in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0.57in",
          left: "3.97in",
          width: "2.29in",
          lineHeight: "0.21in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {formatDate(allInfo?.otherInfo[0]?.SurveyAllotmentDate)}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
        {formatDate(allInfo?.otherInfo[0]?.SurveyConductedDate)}{" "}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Not Conducted, As stated by the insured.
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.02in",
          left: "0.54in",
          width: "2.39in",
          lineHeight: "0.20in",
        }}
      >
        <div style={{ position: "relative", left: "0.27in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Date of Receipt of Spot Survey Report
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          CAUSE &amp; NATURE OF ACCIDENT :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.02in",
          left: "3.54in",
          width: "0.04in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          As{" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "0.25in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            filled{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "0.62in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            in{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "0.84in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            the{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "1.13in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            claim{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "1.53in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            form{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "1.91in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            and{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "2.23in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            discussion{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "2.91in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            with{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "3.25in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            the{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "3.55in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Insured{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "4.09in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            that{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "4.42in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            on{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "4.68in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            the{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "4.97in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            day{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "5.29in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            and{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "5.61in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            time{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "5.97in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            of{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "6.19in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            accident{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "6.77in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "8pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
           {allInfo?.otherInfo[0]?.InsuredName}{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.54in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
      
      </div>
      
      
      <div
        style={{
          position: "absolute",
          top: "1.72in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "0.88in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            was{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.72in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "1.22in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            driving{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.72in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "1.71in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            the{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.72in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "2.01in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            subject{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.72in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "2.52in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            vehicle.{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.72in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "3.06in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {allInfo?.otherInfo[0]?.CauseOfAccident}{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "1.90in",
          left: "0.54in",
          width: "8.15in",
          lineHeight: "0.17in",
        }}
      >
        
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          , causing
          damages.
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "2.30in",
          left: "0.54in",
          width: "2.50in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          POLICE ACTION
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "2.30in",
          left: "0.54in",
          width: "2.50in",
          lineHeight: "0.18in",
        }}
      >
        <div style={{ position: "relative", left: "2.45in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "7pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            :
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "7pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          DETAILS OF LOAD / PASSENGER
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "2.32in",
          left: "3.36in",
          width: "2.20in",
          lineHeight: "0.21in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {allInfo?.otherInfo[0]?.PoliceAction}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {allInfo?.otherInfo[0]?.DetailsOfLoads}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
         {allInfo?.otherInfo[0]?.ThirdPartyLoss}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "2.51in",
          left: "0.54in",
          width: "2.50in",
          lineHeight: "0.20in",
        }}
      >
        <div style={{ position: "relative", left: "2.45in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "7pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            :
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "7pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          THIRD PARTY LOSS/ INJURIES
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "2.77in",
          left: "0.54in",
          width: "2.50in",
          lineHeight: "0.14in",
        }}
      >
        <div style={{ position: "relative", left: "2.45in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "7pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            :
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "7pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "3.25in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.24in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          In accordance with the instructions received from
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "9pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {allInfo?.otherInfo[0]?.InsuranceCompanyNameAddress}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "9pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          dated
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "9pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {formatDate(allInfo?.otherInfo[0]?.AddedDateTime)}{" "}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          I visited
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "9pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
         {allInfo?.otherInfo[0]?.GarageNameAndAddress}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          and inspected the subject
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          vehicle, reported to have met with an accident on
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "9pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
         {formatDate(allInfo?.otherInfo[0]?.DateOfAccident)}{" "}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          {allInfo?.otherInfo[0]?.PlaceOfLoss} and
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          snapped the vehicle from different angles before and after
          dismantling.
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Loss{" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "0.42in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            was{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "0.82in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            discussed{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "1.55in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            with{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "1.97in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            the{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "2.32in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            repairer{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "2.95in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            and{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "3.33in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            finally{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "3.85in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            settled{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "4.41in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            as{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "4.70in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            under{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "5.21in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            subject{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "5.81in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            to{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "6.09in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            policy{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "6.59in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            terms,{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "7.13in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            conditions{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.26in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.19in",
        }}
      >
        <div style={{ position: "relative", left: "7.91in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            and{" "}
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          approval{" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "0.66in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            of{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "0.92in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            the{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "1.26in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Insurers{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "1.90in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            keeping{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "2.51in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            in{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "2.76in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            view{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "3.18in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            the{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "3.51in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            cause{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "4.00in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            &amp;{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "4.23in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            nature{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "4.77in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            of{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "5.03in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            accident{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "5.67in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            and{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "6.04in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            my{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "6.36in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            physical{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "6.99in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            inspection{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "4.47in",
          left: "0.54in",
          width: "8.13in",
          lineHeight: "0.25in",
        }}
      >
        <div style={{ position: "relative", left: "7.74in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            before{" "}
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          and after dismantling.
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "9pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Observation{" "}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          : Subject with good condition overall. No other damages except as
          mentioned above were
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          observed over vehicle. Police report of accident not carried out by
          Insured.
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <img
        style={{
          position: "absolute",
          top: "5.22in",
          left: "0.54in",
          width: "0.84in",
          height: "0.01in",
        }}
        src="vi_15.png"
      />
      <div
        style={{
          position: "absolute",
          top: "3.02in",
          left: "0.54in",
          width: "1.96in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          PARTICULARS OF LOSS/DAMAGES
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "3.02in",
          left: "3.00in",
          width: "0.04in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <img
        style={{
          position: "absolute",
          top: "5.66in",
          left: "0.42in",
          width: "8.40in",
          height: "3.93in",
        }}
        src="vi_16.png"
      />
      <img
        style={{
          position: "absolute",
          top: "6.21in",
          left: "0.43in",
          width: "8.38in",
          height: "0.02in",
        }}
        src="vi_17.png"
      />
      <img
        style={{
          position: "absolute",
          top: "5.85in",
          left: "5.66in",
          width: "2.73in",
          height: "0.02in",
        }}
        src="vi_18.png"
      />
      <img
        style={{
          position: "absolute",
          top: "5.85in",
          left: "6.55in",
          width: "0.02in",
          height: "3.49in",
        }}
        src="vi_19.png"
      />
      <img
        style={{
          position: "absolute",
          top: "5.87in",
          left: "7.44in",
          width: "0.02in",
          height: "3.46in",
        }}
        src="vi_20.png"
      />
      <img
        style={{
          position: "absolute",
          top: "5.67in",
          left: "8.37in",
          width: "0.02in",
          height: "3.91in",
        }}
        src="vi_21.png"
      />
      <img
        style={{
          position: "absolute",
          top: "5.68in",
          left: "5.66in",
          width: "0.02in",
          height: "3.90in",
        }}
        src="vi_22.png"
      />
      <img
        style={{
          position: "absolute",
          top: "5.67in",
          left: "0.83in",
          width: "0.02in",
          height: "0.55in",
        }}
        src="vi_23.png"
      />
      <img
        style={{
          position: "absolute",
          top: "5.69in",
          left: "4.83in",
          width: "0.02in",
          height: "3.89in",
        }}
        src="vi_24.png"
      />
      <img
        style={{
          position: "absolute",
          top: "5.68in",
          left: "4.11in",
          width: "0.02in",
          height: "2.49in",
        }}
        src="vi_25.png"
      />
      <img
        style={{
          position: "absolute",
          top: "5.68in",
          left: "3.63in",
          width: "0.02in",
          height: "2.49in",
        }}
        src="vi_26.png"
      />
      <img
        style={{
          position: "absolute",
          top: "5.68in",
          left: "2.95in",
          width: "0.02in",
          height: "2.49in",
        }}
        src="vi_27.png"
      />
      <img
        style={{
          position: "absolute",
          top: "6.50in",
          left: "0.43in",
          width: "2.55in",
          height: "0.02in",
        }}
        src="vi_28.png"
      />
      <img
        style={{
          position: "absolute",
          top: "6.22in",
          left: "0.44in",
          width: "8.34in",
          height: "0.02in",
        }}
        src="vi_29.png"
      />
      <img
        style={{
          position: "absolute",
          top: "6.50in",
          left: "0.84in",
          width: "0.02in",
          height: "1.67in",
        }}
        src="vi_30.png"
      />
      <img
        style={{
          position: "absolute",
          top: "6.50in",
          left: "0.44in",
          width: "8.36in",
          height: "0.02in",
        }}
        src="vi_31.png"
      />
      <img
        style={{
          position: "absolute",
          top: "6.76in",
          left: "0.44in",
          width: "8.36in",
          height: "0.02in",
        }}
        src="vi_32.png"
      />
      <img
        style={{
          position: "absolute",
          top: "7.01in",
          left: "0.44in",
          width: "8.36in",
          height: "0.02in",
        }}
        src="vi_33.png"
      />
      <img
        style={{
          position: "absolute",
          top: "7.27in",
          left: "0.44in",
          width: "8.36in",
          height: "0.02in",
        }}
        src="vi_34.png"
      />
      <img
        style={{
          position: "absolute",
          top: "7.71in",
          left: "5.66in",
          width: "3.13in",
          height: "0.02in",
        }}
        src="vi_35.png"
      />
      <img
        style={{
          position: "absolute",
          top: "7.53in",
          left: "0.44in",
          width: "8.36in",
          height: "0.02in",
        }}
        src="vi_36.png"
      />
      <img
        style={{
          position: "absolute",
          top: "7.93in",
          left: "5.67in",
          width: "3.13in",
          height: "0.02in",
        }}
        src="vi_37.png"
      />
      <img
        style={{
          position: "absolute",
          top: "8.36in",
          left: "4.83in",
          width: "3.56in",
          height: "0.02in",
        }}
        src="vi_38.png"
      />
      <img
        style={{
          position: "absolute",
          top: "8.15in",
          left: "0.44in",
          width: "8.35in",
          height: "0.02in",
        }}
        src="vi_39.png"
      />
      <img
        style={{
          position: "absolute",
          top: "8.58in",
          left: "4.83in",
          width: "3.55in",
          height: "0.02in",
        }}
        src="vi_40.png"
      />
      <img
        style={{
          position: "absolute",
          top: "8.81in",
          left: "4.84in",
          width: "3.55in",
          height: "0.02in",
        }}
        src="vi_41.png"
      />
      <img
        style={{
          position: "absolute",
          top: "9.05in",
          left: "4.83in",
          width: "3.53in",
          height: "0.02in",
        }}
        src="vi_42.png"
      />
      <img
        style={{
          position: "absolute",
          top: "9.31in",
          left: "4.85in",
          width: "3.94in",
          height: "0.02in",
        }}
        src="vi_43.png"
      />
      <div
        style={{
          position: "absolute",
          top: "5.52in",
          left: "0.47in",
          width: "0.84in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "8pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          NEW PARTS :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "8pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.91in",
          left: "0.51in",
          width: "0.29in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          E. No.
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.89in",
          left: "1.50in",
          width: "0.86in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Parts Description
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.82in",
          left: "5.01in",
          width: "0.50in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Estimated
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.97in",
          left: "5.22in",
          width: "0.09in",
          lineHeight: "0.17in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "rupi-foradian",
            color: "#000000",
          }}
        >
          F
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "rupi-foradian",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.73in",
          left: "6.82in",
          width: "0.57in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Assessed
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "rupi-foradian",
            color: "#000000",
          }}
        >
          F
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "rupi-foradian",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.91in",
          left: "4.28in",
          width: "0.39in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Remark
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.97in",
          left: "7.67in",
          width: "0.51in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Non Metal
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.97in",
          left: "6.76in",
          width: "0.53in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Metal (40)
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.91in",
          left: "5.83in",
          width: "0.55in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Glass/ 2nd
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.05in",
          left: "5.77in",
          width: "0.68in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Hand/ Repair
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.84in",
          left: "3.80in",
          width: "0.16in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Bill
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.99in",
          left: "3.74in",
          width: "0.26in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          S. No
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.85in",
          left: "3.19in",
          width: "0.22in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          HSN{" "}
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "5.99in",
          left: "3.18in",
          width: "0.25in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Code
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <img
        style={{
          position: "absolute",
          top: "6.11in",
          left: "8.54in",
          width: "0.14in",
          height: "0.26in",
        }}
        src="t0.png"
      />
      <div
        style={{
          position: "absolute",
          top: "6.31in",
          left: "0.51in",
          width: "1.21in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Parts with 28.00 % GST
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.58in",
          left: "7.88in",
          width: "0.89in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          6419.54{" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.57in",
          left: "7.88in",
          width: "0.89in",
          lineHeight: "0.12in",
        }}
      >
        <div style={{ position: "relative", left: "0.57in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "7pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
            28.00
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "7pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.58in",
          left: "7.28in",
          width: "0.14in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          ---
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.58in",
          left: "6.39in",
          width: "0.14in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          ---
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.57in",
          left: "5.22in",
          width: "0.40in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          6419.54
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.57in",
          left: "4.15in",
          width: "0.47in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Damaged
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.56in",
          left: "0.87in",
          width: "1.59in",
          lineHeight: "0.23in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Carriar assy-front end modul
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Panel Under er cover fr
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Clip
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Cover Fr Bumper 110 grand
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.56in",
          left: "3.72in",
          width: "0.32in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          671-1
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.56in",
          left: "0.75in",
          width: "0.07in",
          lineHeight: "0.23in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          1
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          2
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          3
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          4
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.84in",
          left: "7.95in",
          width: "0.82in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          425.78{" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.83in",
          left: "7.95in",
          width: "0.82in",
          lineHeight: "0.12in",
        }}
      >
        <div style={{ position: "relative", left: "0.50in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "7pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
            28.00
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "7pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.84in",
          left: "7.28in",
          width: "0.14in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          ---
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.84in",
          left: "6.39in",
          width: "0.14in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          ---
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.83in",
          left: "5.28in",
          width: "0.34in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          425.78
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.83in",
          left: "4.15in",
          width: "0.47in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Damaged
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "6.82in",
          left: "3.72in",
          width: "0.32in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          671-2
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.10in",
          left: "8.20in",
          width: "0.57in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          ---{" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.09in",
          left: "8.20in",
          width: "0.57in",
          lineHeight: "0.12in",
        }}
      >
        <div style={{ position: "relative", left: "0.26in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "7pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
            28.00
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "7pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.10in",
          left: "7.28in",
          width: "0.14in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          ---
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.10in",
          left: "6.39in",
          width: "0.14in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          ---
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.09in",
          left: "5.28in",
          width: "0.34in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          156.25
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.08in",
          left: "4.15in",
          width: "0.46in",
          lineHeight: "0.11in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "6pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Not Payable
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "6pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.08in",
          left: "3.72in",
          width: "0.32in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          671-3
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.35in",
          left: "7.88in",
          width: "0.89in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          1370.32{" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.35in",
          left: "7.88in",
          width: "0.89in",
          lineHeight: "0.12in",
        }}
      >
        <div style={{ position: "relative", left: "0.57in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "7pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
            28.00
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "7pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.35in",
          left: "7.28in",
          width: "0.14in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          ---
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.35in",
          left: "6.39in",
          width: "0.14in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          ---
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.34in",
          left: "5.22in",
          width: "0.40in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          1370.32
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.34in",
          left: "4.15in",
          width: "0.47in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Damaged
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.33in",
          left: "3.72in",
          width: "0.32in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          671-4
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.58in",
          left: "6.37in",
          width: "0.16in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.0
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.58in",
          left: "8.00in",
          width: "0.35in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          8215.6
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.58in",
          left: "7.26in",
          width: "0.16in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.0
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.78in",
          left: "7.20in",
          width: "0.22in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.78in",
          left: "6.31in",
          width: "0.22in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.78in",
          left: "7.91in",
          width: "0.44in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          2,300.38
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <img
        style={{
          position: "absolute",
          top: "7.56in",
          left: "2.82in",
          width: "2.82in",
          height: "0.61in",
        }}
        src="vi_44.png"
      />
      <div
        style={{
          position: "absolute",
          top: "7.80in",
          left: "4.76in",
          width: "0.86in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          GST @ 28.00 %
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "7pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.99in",
          left: "6.31in",
          width: "0.22in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.99in",
          left: "7.23in",
          width: "0.22in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.99in",
          left: "7.86in",
          width: "0.48in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          10516.02
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.00in",
          left: "5.08in",
          width: "0.54in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Sub Total :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7.58in",
          left: "5.29in",
          width: "0.32in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Total :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.22in",
          left: "4.38in",
          width: "0.32in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Total :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.22in",
          left: "8.00in",
          width: "0.35in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          8215.6
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.22in",
          left: "7.26in",
          width: "0.16in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.0
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.22in",
          left: "6.36in",
          width: "0.16in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.0
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.22in",
          left: "5.28in",
          width: "0.35in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          8371.9
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.44in",
          left: "7.91in",
          width: "0.44in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          4,107.82
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.44in",
          left: "7.20in",
          width: "0.22in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          0.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.44in",
          left: "6.30in",
          width: "0.22in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          0.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.44in",
          left: "5.25in",
          width: "0.12in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          ---
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.44in",
          left: "3.44in",
          width: "1.27in",
          lineHeight: "0.21in",
        }}
      >
        <div style={{ position: "relative", left: "0.17in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Less: Depreciation :
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <div style={{ position: "relative", left: "0.86in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Total :
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Add : Applicable GST :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
        <div style={{ position: "relative", left: "0.52in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "7pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            Net Total
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.67in",
          left: "7.98in",
          width: "0.35in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          4107.8
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.67in",
          left: "7.24in",
          width: "0.16in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.0
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.65in",
          left: "6.35in",
          width: "0.16in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.0
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.65in",
          left: "5.27in",
          width: "0.35in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          8371.9
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.90in",
          left: "7.96in",
          width: "0.36in",
          lineHeight: "0.12in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "6pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          1150.19
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "6pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.90in",
          left: "7.20in",
          width: "0.19in",
          lineHeight: "0.12in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "6pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          0.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "6pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.90in",
          left: "6.31in",
          width: "0.19in",
          lineHeight: "0.12in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "6pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          0.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "6pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "8.89in",
          left: "5.22in",
          width: "0.40in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          2344.13
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.09in",
          left: "7.24in",
          width: "0.16in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.0
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.09in",
          left: "7.98in",
          width: "0.35in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          5258.0
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.09in",
          left: "6.35in",
          width: "0.16in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          0.0
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.13in",
          left: "3.44in",
          width: "1.27in",
          lineHeight: "0.19in",
        }}
      >
        <div style={{ position: "relative", left: "1.11in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "rupi-foradian",
              color: "#000000",
            }}
          >
            F
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "7pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            :
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "7pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <div style={{ position: "relative", left: "0.49in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "6pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            Grand Total
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.09in",
          left: "5.21in",
          width: "0.41in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          10716.0
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.40in",
          left: "6.87in",
          width: "0.44in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          5,258.01
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.40in",
          left: "5.22in",
          width: "0.41in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
          10716.0
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.39in",
          left: "3.44in",
          width: "1.27in",
          lineHeight: "0.12in",
        }}
      >
        <div style={{ position: "relative", left: "1.14in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "7pt",
              fontFamily: "rupi-foradian",
              color: "#000000",
            }}
          >
            F{" "}
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "6pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            {" "}
            :
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "6pt",
              fontFamily: "Tahoma-Bold",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          top: "9.90in",
          left: "0.43in",
          width: "8.26in",
          height: "1.19in",
        }}
        src="vi_45.png"
      />
      <img
        style={{
          position: "absolute",
          top: "9.90in",
          left: "0.92in",
          width: "0.02in",
          height: "1.18in",
        }}
        src="vi_46.png"
      />
      <img
        style={{
          position: "absolute",
          top: "9.90in",
          left: "7.77in",
          width: "0.02in",
          height: "1.18in",
        }}
        src="vi_47.png"
      />
      <img
        style={{
          position: "absolute",
          top: "9.92in",
          left: "1.87in",
          width: "0.02in",
          height: "1.16in",
        }}
        src="vi_48.png"
      />
      <img
        style={{
          position: "absolute",
          top: "9.91in",
          left: "2.67in",
          width: "0.02in",
          height: "1.17in",
        }}
        src="vi_49.png"
      />
      <img
        style={{
          position: "absolute",
          top: "10.17in",
          left: "0.43in",
          width: "8.26in",
          height: "0.02in",
        }}
        src="vi_50.png"
      />
      <img
        style={{
          position: "absolute",
          top: "10.42in",
          left: "0.43in",
          width: "8.26in",
          height: "0.02in",
        }}
        src="vi_51.png"
      />
      <img
        style={{
          position: "absolute",
          top: "10.82in",
          left: "0.43in",
          width: "8.26in",
          height: "0.02in",
        }}
        src="vi_52.png"
      />
      <div
        style={{
          position: "absolute",
          top: "10.00in",
          left: "4.32in",
          width: "0.95in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Labour Description
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <img
        style={{
          position: "absolute",
          top: "9.92in",
          left: "6.88in",
          width: "0.02in",
          height: "0.27in",
        }}
        src="vi_53.png"
      />
      <div
        style={{
          position: "absolute",
          top: "9.97in",
          left: "7.02in",
          width: "0.62in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Estimated
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "rupi-foradian",
            color: "#000000",
          }}
        >
          F
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "rupi-foradian",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.97in",
          left: "7.94in",
          width: "0.57in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Assessed
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "rupi-foradian",
            color: "#000000",
          }}
        >
          F
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "rupi-foradian",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.01in",
          left: "0.54in",
          width: "0.29in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          S. No.
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.68in",
          left: "0.47in",
          width: "1.35in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "8pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          LABOUR &amp; REPAIRS :
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "8pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.01in",
          left: "1.30in",
          width: "0.20in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          SAC
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "9.99in",
          left: "2.08in",
          width: "0.45in",
          lineHeight: "0.13in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          Bill S. No
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "6pt",
            fontFamily: "Tahoma-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.23in",
          left: "8.25in",
          width: "0.38in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          300.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.23in",
          left: "7.34in",
          width: "0.38in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          700.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <img
        style={{
          position: "absolute",
          top: "10.21in",
          left: "6.88in",
          width: "0.02in",
          height: "0.21in",
        }}
        src="vi_54.png"
      />
      <div
        style={{
          position: "absolute",
          top: "10.24in",
          left: "2.77in",
          width: "1.22in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          radiator khulayi fitting
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.28in",
          left: "0.84in",
          width: "0.07in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          1
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.48in",
          left: "8.25in",
          width: "0.38in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          300.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.48in",
          left: "7.28in",
          width: "0.45in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          2000.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <img
        style={{
          position: "absolute",
          top: "10.46in",
          left: "6.88in",
          width: "0.02in",
          height: "0.38in",
        }}
        src="vi_55.png"
      />
      <div
        style={{
          position: "absolute",
          top: "10.49in",
          left: "2.77in",
          width: "4.10in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Ac{" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.49in",
          left: "2.77in",
          width: "4.10in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "0.32in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Condenser{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.49in",
          left: "2.77in",
          width: "4.10in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "1.10in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Opening{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.49in",
          left: "2.77in",
          width: "4.10in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "1.75in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Fitting{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.49in",
          left: "2.77in",
          width: "4.10in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "2.28in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            &amp;{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.49in",
          left: "2.77in",
          width: "4.10in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "2.56in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Ac{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.49in",
          left: "2.77in",
          width: "4.10in",
          lineHeight: "0.16in",
        }}
      >
        <div style={{ position: "relative", left: "2.88in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            Charge{" "}
          </span>
        </div>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.49in",
          left: "2.77in",
          width: "4.10in",
          lineHeight: "0.17in",
        }}
      >
        <div style={{ position: "relative", left: "3.46in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            (Condenser{" "}
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "8pt",
              fontFamily: "Tahoma",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Opening Fitting)
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.53in",
          left: "0.84in",
          width: "0.07in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          2
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.87in",
          left: "8.25in",
          width: "0.38in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          550.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.87in",
          left: "7.28in",
          width: "0.45in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          1000.00
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <img
        style={{
          position: "absolute",
          top: "10.85in",
          left: "6.88in",
          width: "0.02in",
          height: "0.21in",
        }}
        src="vi_56.png"
      />
      <div
        style={{
          position: "absolute",
          top: "10.88in",
          left: "2.77in",
          width: "1.59in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          Tie- Member Opening Fitting
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10.92in",
          left: "0.84in",
          width: "0.07in",
          lineHeight: "0.16in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
          3
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "8pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "11.42in",
          left: "8.52in",
          width: "0.29in",
          lineHeight: "0.14in",
        }}
      >
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          2 of 4
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "7pt",
            fontFamily: "Tahoma",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
      <div
        style={{
          position: "absolute",
          top: "11.27in",
          left: "1.84in",
          width: "5.80in",
          lineHeight: "0.19in",
        }}
      >
        <div style={{ position: "relative", left: "0.50in" }}>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "9pt",
              fontFamily: "Calibri-Bold",
              color: "#000000",
            }}
          >
            H.O.{" "}
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "9pt",
              fontFamily: "Calibri",
              color: "#000000",
            }}
          >
            Address : 58-Gandhi Na Gandhi Nagar, Near Bal Niketan School an
            School ,
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "9pt",
              fontFamily: "Calibri-Bold",
              color: "#000000",
            }}
          >
            Sri Gan Sri Ganganagar(Raj.)-335001
          </span>
          <span
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "9pt",
              fontFamily: "Calibri-Bold",
              color: "#000000",
            }}
          >
            {" "}
          </span>
          <br />
        </div>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "9pt",
            fontFamily: "Calibri-Bold",
            color: "#000000",
          }}
        >
          Ofce
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Calibri",
            color: "#000000",
          }}
        >
          : B-43, NFL Soci NFL Society,Sector-PI,
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "9pt",
            fontFamily: "Calibri-Bold",
            color: "#000000",
          }}
        >
          Gr Noida-201310./
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "9pt",
            fontFamily: "Calibri",
            color: "#000000",
          }}
        >
          E-201,MAPSKO Mountville,Sector-79
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "9pt",
            fontFamily: "Calibri-Bold",
            color: "#000000",
          }}
        >
          ,Gurugram(Hr)
        </span>
        <span
          style={{
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "9pt",
            fontFamily: "Calibri-Bold",
            color: "#000000",
          }}
        >
          {" "}
        </span>
        <br />
      </div>
    </div>
  );
};

export default MyFunctionalComponent;
