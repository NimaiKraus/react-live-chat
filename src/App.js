import logo from "./logo.svg";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
  if(!localStorage.getItem("username")) return <LoginForm />

  return (
    <ChatEngine
      projectID="7b7d98dc-9900-4fb9-a639-70ff3387c6b6"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      height="100vh"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
