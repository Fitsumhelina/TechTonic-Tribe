import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../../../server/lib/firebase";
import { useChatStore } from "../../../../../server/lib/chatStore";
import { useUserStore } from "../../../../../server/lib/userStore";
import upload from "../../../../../server/lib/upload";
import { format } from "timeago.js";

// Import icons
import audioIcon from './../../../assets/audio.png';
import documentIcon from './../../../assets/document.png';


const Chat = () => {
  const [chat, setChat] = useState({});
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState("");

  const { currentUser } = useUserStore();
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked } = useChatStore();

  const endRef = useRef(null);

  useEffect(() => {
    if (chat && chat.messages) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setFilePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSend = async () => {
    if (text === "" && !file) return;

    let fileUrl = null;
    let fileType = null;

    try {
      if (file) {
        fileUrl = await upload(file);
        fileType = file.type.split("/")[0]; // e.g., "image", "audio", "application"
      }

      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          ...(fileUrl && { fileUrl, fileType }),
        }),
      });

      const userIDs = [currentUser.id, user.id];

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c) => c.chatId === chatId
          );

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen = id === currentUser.id;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    } finally {
      setFile(null);
      setFilePreview("");
      setText("");
    }
  };

  const renderMessageContent = (message) => {
    switch (message.fileType) {
      case "image":
        return <img src={message.fileUrl} alt="uploaded" />;
      case "audio":
        return (
          <div className="file-container">
            <a href={message.fileUrl} target="_blank" rel="noopener noreferrer">
            <img src={audioIcon} alt="audio icon" />
            <> Click Here to Listen </>
            </a>
          </div>
        );
      case "application":
        return (
          <div className="file-container">
            <a href={message.fileUrl} target="_blank" rel="noopener noreferrer">
            <img src={documentIcon} alt="document icon" />
            <> Click Here to Download </>
            </a>
          </div>
        );
      default:
        return <p>{message.text}</p>;
    }
  };

  return (
    <>
      
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={user?.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{user?.username}</span>
          </div>
        </div>
        <div className="icons">
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        {chat?.messages?.map((message) => (
          <div
          className={message.senderId === currentUser?.id ? "message own" : "message"}
          key={message?.createdAt}
          >
            <div className="texts">
              {renderMessageContent(message)}
              <span>{format(message.createdAt.toDate())}</span>
            </div>
          </div>
        ))}
        {filePreview && (
          <div className="message own">
            <div className="texts">
              {file.type.startsWith("image") && <img src={filePreview} alt="preview" />}
              {file.type.startsWith("audio") && (
                <div className="file-container">
                  <img src={audioIcon} alt="audio icon" />
                  <a href={filePreview} target="_blank" rel="noopener noreferrer" style={{ color: 'green' }}>
                  <p>  {file.name} </p> 
                  </a>
                </div>
              )}
              {file.type.startsWith("application") && (
                <div className="file-container">
                  <img src={documentIcon} alt="document icon" />
                  <a href={filePreview} target="_blank" rel="noopener noreferrer">
                    {file.name}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./attach.png" alt="" />
          </label>
          <input
            type="file"
            id="file"
            accept=".pdf, .doc, .docx, .jpg, .jpeg, .png, .gif, .mp3, .wav, .ogg"
            style={{ display: "none" }}
            onChange={handleFileChange}
            />
        </div>
        <input
          type="text"
          placeholder={
            isCurrentUserBlocked || isReceiverBlocked
              ? "You cannot send a message"
              : "Type a message..."
            }
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isCurrentUserBlocked || isReceiverBlocked}
            />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
            />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button
          className="sendButton"
          onClick={handleSend}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
          >
          Send
        </button>
      </div>
    </div>
          </>
  );
};

export default Chat;
