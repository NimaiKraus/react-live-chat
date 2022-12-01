import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  const { activeChat, chats, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderReadReceipt = (message, isMyMessage) => {
    console.log(chat, "chat");
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage: person.person.avatar
                ? `url(${person.person.avatar})`
                : person.person.userName,
            }}
          />
        )
    );
  };

  const renderMessages = () => {
    const msgsKeys = Object.keys(messages);
    return msgsKeys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : messages[index - 1];
      const isMyMessage = userName === message.sender?.username;
      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="single-message-container">
            {isMyMessage ? (
              <MyMessage
                message={message}
                
              />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
                
              />
            )}
          </div>
          <div
            className="read-receipt-container"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "18px",
            }}
          >
            {renderReadReceipt(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className="chat-container">
      <div className="chat-title-container">{chat?.title}</div>
      <div className="render-message-container">{renderMessages()}</div>
      <div className="spacer"/>
      <div className="message-form-container">
        <MessageForm {...props} chatID={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
