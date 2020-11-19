import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import chatStore from "../store/chat";
import PersonLinkWrapper from "./PersonLinkWrapper";
const PersonSwitcher = () => {
  const [chatState, setChatState] = useState(chatStore.initialState);
  const location = useLocation().pathname.split("/")[1];
  useEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  const messageNotification = chatState.newDataCount > 0 && (
    <span className="notify">{chatState.newDataCount}</span>
  );

  return (
    <div className="switcher-div">
      <PersonLinkWrapper location={location} type="first-person">
        <button className="switcher">
          Person1
          {location !== "first-person" &&
            location.length > 1 &&
            messageNotification}
        </button>
      </PersonLinkWrapper>
      <PersonLinkWrapper location={location} type="second-person">
        <button className="switcher">
          Person2
          {location !== "second-person" && messageNotification}
        </button>
      </PersonLinkWrapper>
    </div>
  );
};

export default React.memo(PersonSwitcher);
