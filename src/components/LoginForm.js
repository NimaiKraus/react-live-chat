import axios from "axios";
import { useState } from "react";

const projectID = "7b7d98dc-9900-4fb9-a639-70ff3387c6b6";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authObject = {
    "Project-ID": projectID,
    "User-Name": username,
    "User-Secret": password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .get("https://api.chatengine.io/chats", {
          headers: authObject,
        })
        .then((res) => console.log(res, "reessss"));

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Oops, wrong credentials, try again.");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="login-input"
          type={"text"}
          placeholder="Username ..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type={"password"}
          placeholder="Password ..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">
          Join a chat
        </button>
      </form>
      <h1>{error}</h1>
    </div>
  );
};

export default LoginForm;
