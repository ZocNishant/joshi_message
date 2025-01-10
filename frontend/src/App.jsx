import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Chat from "./components/chat/Chat";

const App = () => {
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
