import React, { useState, useLayoutEffect, useRef } from "react";
import chatStore from "../store/chat"; 

const Form = ({ type }) => {
  const [, setChatState] = useState(chatStore.initialState);

  const formRef = useRef(<form />);

  useLayoutEffect(() => {
    const subs = chatStore.subscribe(setChatState);
    chatStore.init();

    return () => subs.unsubscribe();
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const messageObject = {
      person: String(type),
      text: e.target.elements.messageInput.value.trim(),
    };
    chatStore.sendMessage(messageObject);
    formRef.current?.reset();
  }; 
  return (
    <>
      <form ref={formRef} id="messageForm" onSubmit={onFormSubmit}>
        <input
          type="text"
          id="messageInput"
          name="messageInput"
          placeholder="type here..."
          required
        />
        <button type="submit">Send</button> <br />
      </form>
      <button className="clear-button" onClick={chatStore.clearChat}>
        Clear Chat
      </button>
    </>
  );
};

export default React.memo(Form);
