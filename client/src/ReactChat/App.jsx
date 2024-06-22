import { useEffect , useState } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../server/lib/firebase";
import { useUserStore } from "../../../server/lib/userStore";
import { useChatStore } from "../../../server/lib/chatStore";
import styles from "./chatapp.module.css";
import Login from "./components/login/Login";
import "./loading.css";
import CustomNotification from './components/notification/Notification';
import { toast } from 'react-toastify'; // Import react-toastify

const ChatApp = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId, chat } = useChatStore(); // Get chatId and chat data
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);


  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  useEffect(() => {
    if (chat && chat.messages && chat.messages.length > 0) {
      const lastMessage = chat.messages[chat.messages.length - 1];
      if (lastMessage.senderId !== currentUser.id && !hasUnreadMessages) {
        setHasUnreadMessages(true);
        toast.info('You have received a new message!');
      }
    }
  }, [chat, currentUser, hasUnreadMessages]);

  const handleNotificationClick = () => {
    // Navigate to the chat page when notification is clicked
    // You can adjust the navigation logic based on your routing setup
    // For example, if you're using React Router, you can use its history API
    // history.push("/chat");
    console.log("Notification clicked!");
    setHasUnreadMessages(false); // Reset notification state
  };

  if (isLoading) {
    return (
    <div className="loading">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
    );
  } else {
    return (
      <div className={styles.all}>
        <body>
          <div className={styles.container}>
            <Notification />
            {currentUser ? (
              <>
                <List />
                {chatId && <CustomNotification hasUnreadMessages={hasUnreadMessages} onClick={handleNotificationClick} />}
                {chatId && <Chat />}
                {chatId && <Detail />}
              </>
            ) : (
              <Login />
            )}
          </div>
        </body>
      </div>
    );
  }
};

export default ChatApp;
