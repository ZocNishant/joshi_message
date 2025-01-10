import "./Sidechat.css";
import { Avatar } from "@mui/material";

const Sidechat = () => {
  return (
    <section className="sidebarChat">
      <Avatar src={`https://api.dicebear.com/9.x/lorelei/svg`} />
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>Last Message...</p>
      </div>
    </section>
  );
};

export default Sidechat;
