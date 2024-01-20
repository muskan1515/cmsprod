const AllStatistics = () => {
  const allStatistics = [
    {
      id: 0,
      blockStyle: "",
      icon: "flaticon-home",
      timer: "37",
      name: "Claim Appointment",
      color: "#a5d9c5",
    },
    {
      id: 1,
      blockStyle: "",
      icon: "flaticon-home",
      timer: "37",
      name: "Estimate Approval Pending",
      color: "#AFEEEE",
    },
    {
      id: 2,
      blockStyle: "style2",
      icon: "flaticon-view",
      timer: "24",
      name: "Vehicle Under Repair",
      color: "#98FB98",
    },
    {
      id: 3,
      blockStyle: "style3",
      icon: "flaticon-chat",
      timer: "12",
      name: "Invoice Approval Pending",
      color: "#9ACD32",
    },
    {
      id: 4,
      blockStyle: "style4",
      icon: "flaticon-heart",
      timer: "18",
      name: "Surveyor Report Uploaded",
      color: "#FFA07A",
    },
    {
      id: 1,
      blockStyle: "",
      icon: "flaticon-home",
      timer: "37",
      name: "Hard Copies Pending",
      color: "#FFB6C1",
    },
    {
      id: 2,
      blockStyle: "style2",
      icon: "flaticon-view",
      timer: "24",
      name: "Soft Copy Completed",
      color: "#FFE4E1",
    },
    {
      id: 3,
      blockStyle: "style3",
      icon: "flaticon-chat",
      timer: "12",
      name: "Payment Pending",
      color: "#B0C4DE",
    },
    {
      id: 4,
      blockStyle: "style4",
      icon: "flaticon-heart",
      timer: "18",
      name: "Settled Cases",
      color: "#7FFFD4",
    },
    {
      id: 1,
      blockStyle: "",
      icon: "flaticon-home",
      timer: "37",
      name: "Withdrawn / Rejected",
      color: "#FFFACD",
    },
    {
      id: 2,
      blockStyle: "style2",
      icon: "flaticon-view",
      timer: "24",
      name: "More Info Required",
      color: "#FFEFD5",
    },
    {
      id: 3,
      blockStyle: "style2",
      icon: "flaticon-chat",
      timer: "12",
      name: "My Claims",
      color: "#E6E6FA",
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
            style={{ backgroundColor: item.color, marginRight: "5px" }}
          >
            <div className="detais">
              <div className="timer fw-bold" style={{ fontSize: "32px" }}>
                {item.timer}
              </div>
              <p
                style={{ fontSize: "12px", color: "black", fontWeight: "bold" }}
              >
                {item.name}
              </p>
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
