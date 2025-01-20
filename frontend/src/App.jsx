import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Chat from "./components/chat/Chat";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";

const App = () => {
  const [messages, setMessages] = useState([]);

  // pusher-js config
  useEffect(() => {
    const pusher = new Pusher("9exxxxxxxxxxxx", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messahes");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      channel.bind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  return (
    <div className="app">
      <section className="app_body">
        <Sidebar />
        <Chat />
      </section>
    </div>
  );
};

export default App;
