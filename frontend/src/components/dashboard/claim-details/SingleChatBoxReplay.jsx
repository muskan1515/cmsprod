import Image from "next/image";

const SingleChatBoxReply = () => {
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

  return (
    <>
      {replyContent.map((user) => (
        <li className="media sent" key={user.id}>
          <span className="contact-status busy"></span>
          <Image
            width={57}
            height={57}
            className="img-fluid align-self-start mr-3"
            src="/assets/images/team/s6.jpg"
            alt="s6.jpg"
          />
          <div className="media-body">
            <div className="date_time">Today, 10:51</div>
            <p>{user.message}</p>
          </div>

          {user.reply}
        </li>
      ))}
    </>
  );
};

export default SingleChatBoxReply;
