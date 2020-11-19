import React, { useState, useLayoutEffect } from "react";
import chatStore from "../store/chat";
import Message from "./Message"; 
const MessageList = ({ type }) => {
  const [chatState, setChatState] = useState(chatStore.initialState);

  useLayoutEffect(() => {
    const subs = chatStore.subscribe(setChatState);
    chatStore.init();

    return () => subs.unsubscribe();
  }, []);

  return (
    <div className="chat-box">
      {console.log(type + " chat-box rendered")}
      {chatState.data.map((message, index) => (
        <Message message={message} key={message.text + index} />
      ))}
    </div>
  );
};

export default React.memo(MessageList);
