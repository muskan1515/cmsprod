// import logo from "./../logo.svg";
import Image from "next/image";
const PrintComponent = ({ children }) => {
  const printAction = () => {
    window.print();
  };
  return (
    <>
      {/* <button className={"print-preview-button"} onClick={printAction}>
        {"Print Preview"}
      </button> */}
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
            <td>{children}</td>
          </tr>
        </tbody>
        <tfoot className="table-footer">
          <tr>
            <td>
              {
                <footer className="bg-gray-800 text-white">
                  <hr style={{ border: "2px solid black" }} />
                  <div className="">
                    <div className="d-flex gap-5">
                      <div className="">
                        <h5 className="text-center text-dark">
                          H.O. Address : 58-Gandhi Nagar,Near Bal Niketan School
                          ,Sri Ganganagar(Raj.)-335001
                        </h5>
                        <h5 className="text-center text-dark">
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
              }
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default PrintComponent;
