import React from "react"; 
import MessageList from "./MessageList";
import Form from "./Form";
const Person = ({ type }) => { 

  return (
    <div className="container">
      {console.log(type + " Person rendered")}
      <h2>Messages:</h2>
      <MessageList type={type} />
      <Form type={type} />
    </div>
  );
};

export default React.memo(Person);
