import React from "react";

const Message = ({ message: { person, text } }) => (
  <div> 
    {console.log('Message item rendered: '+text)}
    <p className={person}>{text}</p>
    <div className="clear"></div>
  </div>
);

export default React.memo(Message);
