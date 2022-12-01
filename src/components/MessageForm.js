import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, FileImageOutlined } from "@ant-design/icons";

const MessageForm = (props) => {
  const { creds, chatID } = props;
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();
    sendMessage(creds, chatID, {text});
    setValue("");
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatID, {files: event.target.files, text:""})
  }
  return (
    <form className="write-message-form" onSubmit={handleSubmit}>
      <input
        type={"text"}
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="input-write-message"
        placeholder="Write a message ..."
      />
      <button type="submit" className="btn-send-message">
        <SendOutlined className="send-icon"/>
      </button>
      <input type="file" id="upload-button" onChange={handleUpload} />
    </form>
  );
};

export default MessageForm;
