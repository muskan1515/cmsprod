import SingleChatBoxReply from "./SingleChatBoxReplay";

const ChatboxContent = () => {
  return (
    <>
      <div className="mi_text mt-2">
        <div className="message_input">
          <form className="form-inline position-relative">
            <textarea
              className="form-control"
              placeholder="Enter Comment..."
              cols="40"
              rows="3"
              wrap="hard"
              required
            />
            <button className="btn btn-color w-100 mt-2" type="submit">
              Add Comment
            </button>
          </form>
        </div>
      </div>
      <div className="inbox_chatting_box">
        <ul className="chatting_content">
          <SingleChatBoxReply />
        </ul>
      </div>
      {/* End inbox_chatting_box */}
    </>
  );
};

export default ChatboxContent;
