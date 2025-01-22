import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from "@mui/icons-material";
import MicIcon from "@mui/icons-material/Mic";

const Chat = () => {
  return (
    <section className="chat">
      <div className="chat_header">
        <Avatar src={`https://api.dicebear.com/9.x/lorelei/svg`} />
        <div className="chat_headerInfo">
          <h2>Punte</h2>
          <p>Last seen at ...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Nishant</span>
          Message 1
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_receiver">
          <span className="chat_name">Pasa</span>
          Message 2
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Nishant</span>
          Message 3
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input type="text" placeholder="Type a message.." />
          <button type="submit">Pathau</button>
        </form>
        <MicIcon />
      </div>
    </section>
  );
};

export default Chat;
