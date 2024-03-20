// import logo from "./../logo.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";

const PrintComponent = ({ children }) => {
  const footerRef = useRef(null);

  useEffect(() => {
    const handlePrint = () => {
      if (footerRef.current) {
        footerRef.current.style.position = "fixed";
        footerRef.current.style.bottom = "0";
        footerRef.current.style.width = "100%";
      }
    };

    window.onbeforeprint = handlePrint;

    return () => {
      window.onbeforeprint = null;
    };
  }, []);
  const printAction = () => {
    window.print();
  };
  return (
    <>
      {/* <button className={"print-preview-button"} onClick={printAction}>
        {"Print Preview"}
      </button> */}
      <div className="page-footer">
        <footer ref={footerRef} className="bg-gray-800 text-white" style={{}}>
          <div
            style={{
              border: "1px solid black",
              marginBottom: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div className="">
            <div className="d-flex gap-3 align-item-center">
              <div
                className=""
                style={{ display: "flex", alignItems: "center" }}
              >
                <h5 className="text-dark" style={{ fontSize: "12px", paddingLeft:"10px" }}>
                  H.O. Address : 58-Gandhi Nagar,Near Bal Niketan School ,Sri
                  Ganganagar(Raj.)-335001
                </h5>
                {/* <h5
                  className="text-center text-dark"
                  style={{ fontSize: "12px" }}
                >
                  Ofce: B-43,NFL Society,Sector-PI,Gr Noida-201310./E-201,MAPSKO
                  Mountville,Sector-79,Gurugram(Hr)
                </h5> */}
              </div>
              <div className="" style={{ marginTop: "" }}>
                <div className="text-end">
                  <Image
                    width={201}
                    height={54}
                    priority
                    className="w50"
                    src="/assets/images/stamp.jpg"
                    alt="1.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <table className="print-component">
        <thead>
          <tr>
            <th>
              {/* <img src={logo} height={"40px"} width={"40px"} alt="logo" /> */}
              {/* <div>{"Page Header"}</div> */}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="page">{children}</td>
          </tr>
        </tbody>
        <tfoot className="table-footer" style={{}}>
          <tr>
            <td>
              {/* {
                <footer
                  ref={footerRef}
                  className="bg-gray-800 text-white"
                  style={{}}
                >
                  <hr style={{ border: "2px solid black" }} />
                  <div className="">
                    <div className="d-flex gap-5">
                      <div className="">
                        <h5
                          className="text-center text-dark"
                          style={{ fontSize: "12px" }}
                        >
                          H.O. Address : 58-Gandhi Nagar,Near Bal Niketan School
                          ,Sri Ganganagar(Raj.)-335001
                        </h5>
                        <h5
                          className="text-center text-dark"
                          style={{ fontSize: "12px" }}
                        >
                          Ofce: B-43,NFL Society,Sector-PI,Gr
                          Noida-201310./E-201,MAPSKO
                          Mountville,Sector-79,Gurugram(Hr)
                        </h5>
                      </div>
                      <div className="" style={{ marginTop: "0px" }}>
                        <div className="text-end">
                          <Image
                            width={261}
                            height={69}
                            priority
                            className="w50"
                            src="/assets/images/stamp.jpg"
                            alt="1.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              } */}
              <div className="page-footer-space"></div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default PrintComponent;
