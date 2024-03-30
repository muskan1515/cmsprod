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

  const formatDate = (datetimeString) => {
    const date = moment(datetimeString);
    const today = moment().startOf("day");
    const yesterday = moment().subtract(1, "days").startOf("day");

    let convertedDateTime;

    if (date.isSame(today, "day")) {
      convertedDateTime = "Today";
    } else if (date.isSame(yesterday, "day")) {
      convertedDateTime = "Yesterday";
    } else {
      convertedDateTime = date.format("DD MMM YYYY");
    }

    convertedDateTime += " at " + date.format("hh:mm A");

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
