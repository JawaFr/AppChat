import React from 'react';

function Message({ msg, currentUser }) {
  const isSentByCurrentUser = msg.sender === currentUser;

  return (
    <>
      <p className={`message_${isSentByCurrentUser ? 'sent' : 'received'}`}>{msg.text}</p>
    </>
  );
}

export default Message;
