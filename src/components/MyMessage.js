const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <>
        <div className="my-message-username">{message.sender.username}</div>
        <img
          src={`${message.attachments[0].file}`}
          className="uploaded-img"
          alt="message attachments"
          style={{ float: "right", margin: "10px 18px 10px 0px" }}
        />
      </>
    );
  }
  return (
    <>
      <div className="my-message-username">{message.sender?.username}</div>
      <div
        className="message"
        style={{
          float: "right",
          marginRight: "18px",
          backgroundColor: "#D9D2B6",
          color: "rgb(20, 20, 20)",
        }}
      >
        {message.text.trim()}
      </div>
    </>
  );
};

export default MyMessage;
