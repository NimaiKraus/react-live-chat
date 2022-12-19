const TheirMessage = ({ message, lastMessage }) => {
  console.log(message, "message", lastMessage, "last message");
  const isUserFirstMessage =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  if (message.attachments && message.attachments.length > 0) {
    return (
      <>
        <div className="their-message-username">{message.sender.username}</div>
        <img
          src={`${message.attachments[0].file}`}
          className="uploaded-img"
          alt="message attachments"
          style={{ float: "left", margin: "10px 0px 10px 18px" }}
        />
      </>
    );
  }
  return (
    <>
      <div className="their-message-username">{message.sender?.username}</div>
      <div
        className="message"
        style={{
          float: "left",
          backgroundColor: "#ca7832",
          color: "black",
          marginLeft: "18px",
        }}
      >
        {message.text}
      </div>
    </>
  );
};

export default TheirMessage;
