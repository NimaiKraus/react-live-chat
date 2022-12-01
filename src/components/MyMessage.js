const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <>
      <div className="img-message-username">
        {message.sender.username}
      </div>
      <img
        src={`${message.attachments[0].file}`}
        className="uploaded-img"
        alt="message attachments"
        style={{ float: "right", marginRight: "18px",}}
      />
      </>
    );
  }
  return (
    <div
      className="message"
      style={{
        float: 'right',
        marginRight: "18px",
        backgroundColor: "#D9D2B6",
        color: "rgb(20, 20, 20)",
      }}
    >
      <div className="message-username">
        {message.sender.username}
      </div>
      {message.text.trim()}
    </div>
  );
};

export default MyMessage;
