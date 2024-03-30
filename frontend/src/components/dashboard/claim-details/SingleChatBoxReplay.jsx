import moment from "moment";
import Image from "next/image";

const SingleChatBoxReply = ({ allComments }) => {
  const replyContent = [
    {
      id: 1,
      message: `Hello, John!`,
      reply: <></>,
    },
    {
      id: 3,
      message: `Let's go!`,
      reply: <></>,
    },
  ];

  // const formatDate = (datetimeString) => {
  //   console.log('--19---', datetimeString)
  //   const date = moment(datetimeString);
  //   console.log('----',date)
  //   const today = moment().startOf("day");
  //   const yesterday = moment().subtract(1, "days").startOf("day");

  //   let convertedDateTime;

  //   if (date.isSame(today, "day")) {
  //     convertedDateTime = "Today";
  //   } else if (date.isSame(yesterday, "day")) {
  //     convertedDateTime = "Yesterday";
  //   } else {
  //     convertedDateTime = date.format("DD MMM YYYY");
  //   }

  //   convertedDateTime += " at " + date.format("hh:mm A");
  //   console.log('---',convertedDateTime)
  //   return convertedDateTime;
  // };
  const formatDate = (datetimeString) => {
    const date = new Date(datetimeString);
  
    // Adjust date to IST timezone (UTC+5:30)
    const timezoneOffset = 5.5 * 60 * 60000; // Offset in milliseconds
    date.setTime(date.getTime() - timezoneOffset);
  
    // Get current date and time in IST
    const nowIST = new Date(Date.now() - timezoneOffset);
    const todayIST = new Date(nowIST.getFullYear(), nowIST.getMonth(), nowIST.getDate());
    console.log('--49--',nowIST)
    const yesterdayIST = new Date(todayIST);
    yesterdayIST.setDate(yesterdayIST.getDate() - 1);
  
    // Function to add leading zero to single-digit numbers
    const addLeadingZero = (num) => (num < 10 ? "0" + num : num);
  
    let convertedDateTime;
  
    // Check if the date is today
    if (
      date.getDate() === todayIST.getDate() &&
      date.getMonth() === todayIST.getMonth() &&
      date.getFullYear() === todayIST.getFullYear()
    ) {
      convertedDateTime = "Today";
    }
    // Check if the date is yesterday
    else if (
      date.getDate() === yesterdayIST.getDate() &&
      date.getMonth() === yesterdayIST.getMonth() &&
      date.getFullYear() === yesterdayIST.getFullYear()
    ) {
      convertedDateTime = "Yesterday";
    } else {
      // Format date as "DD MMM YYYY"
      const formattedDate =
        addLeadingZero(date.getDate()) +
        " " +
        [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ][date.getMonth()] +
        " " +
        date.getFullYear();
      convertedDateTime = formattedDate;
    }
  
    // Format time as "hh:mm A"
    const hours = addLeadingZero(date.getHours() % 12 || 12);
    const minutes = addLeadingZero(date.getMinutes());
    const period = date.getHours() < 12 ? "AM" : "PM";
    const formattedTime = hours + ":" + minutes + " " + period;
  
    convertedDateTime += " at " + formattedTime;
  
    return convertedDateTime;
  };
  
  return (
    <>
      {/* {allComments.map((user, index) => (
        <li className="media sent" key={user.index}>
          <div
            className="avatar"
            style={{
              backgroundColor: "gray",
              padding: "4%",
              borderRadius: "50%",
              color: "white",
            }}
          >
            {user.UserName.charAt(0)}
          </div>
          <div className="media-body">
            <div className="date_time">{formatDate(user.AddedDate)}</div>
            <p>{user.Comment}</p>
          </div>

          {user.UserName}
        </li>
      ))} */}
      <div className="scrollable-container">
        <ul className="comments-list">
          {allComments.map((user, index) => (
            <li className="media sent" key={user.index}>
              <div
                className="avatar"
                style={{
                  backgroundColor: "gray",
                  padding: "4%",
                  borderRadius: "50%",
                  color: "white",
                }}
              >
                {user.UserName.charAt(0)}
              </div>
              <div className="media-body">
                <div className="date_time">{formatDate(user.AddedDate)}</div>
                <p>{user.Comment}</p>
              </div>
              <br />
              <h5 style={{ paddingTop: "5px", marginLeft: "55px" }}>
                {user.UserName}
              </h5>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SingleChatBoxReply;
