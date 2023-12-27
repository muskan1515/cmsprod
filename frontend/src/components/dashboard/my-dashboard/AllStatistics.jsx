const AllStatistics = () => {
  const allStatistics = [
    {
      id: 1,
      blockStyle: "",
      icon: "flaticon-home",
      timer: "37",
      name: "Estimate Approval Pending",
    },
    {
      id: 2,
      blockStyle: "style2",
      icon: "flaticon-view",
      timer: "24",
      name: "Vehicle Under Repair",
    },
    {
      id: 3,
      blockStyle: "style3",
      icon: "flaticon-chat",
      timer: "12",
      name: "Invoice Approval Pending",
    },
    {
      id: 4,
      blockStyle: "style4",
      icon: "flaticon-heart",
      timer: "18",
      name: "Surveyor Report Uploaded",
    },
    {
      id: 1,
      blockStyle: "",
      icon: "flaticon-home",
      timer: "37",
      name: "Hard Copies Pending",
    },
    {
      id: 2,
      blockStyle: "style2",
      icon: "flaticon-view",
      timer: "24",
      name: "Soft Copy Completed",
    },
    {
      id: 3,
      blockStyle: "style3",
      icon: "flaticon-chat",
      timer: "12",
      name: "Payment Pending",
    },
    {
      id: 4,
      blockStyle: "style4",
      icon: "flaticon-heart",
      timer: "18",
      name: "Settled Cases",
    },
    {
      id: 1,
      blockStyle: "",
      icon: "flaticon-home",
      timer: "37",
      name: "Withdrawn / Rejected",
    },
    {
      id: 2,
      blockStyle: "style2",
      icon: "flaticon-view",
      timer: "24",
      name: "More Info Required",
    },
    {
      id: 3,
      blockStyle: "style2",
      icon: "flaticon-chat",
      timer: "12",
      name: "My Claims",
    },
  ];

  return (
    <>
      {allStatistics.map((item) => (
        <div
          className="col-xs-4 col-sm-2 col-md-6 col-lg-4 col-xl-1"
          key={item.id}
          style={{ padding: "0px" }}
        >
          <div
            className={`ff_one ${item.blockStyle}`}
            style={{ backgroundColor: "lightblue" }}
          >
            <div className="detais">
              <div className="timer fw-bold" style={{ fontSize: "26px" }}>
                {item.timer}
              </div>
              <p style={{ fontSize: "12px" }}>{item.name}</p>
            </div>
            {/* <div className="icon">
              <span className={item.icon}></span>
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default AllStatistics;
