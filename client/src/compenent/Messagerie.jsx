import React, { useRef } from 'react';
import Message from './Message.jsx';

function Messagerie({ onHandleClick, messages, currentUser }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    const message = {
      text: inputRef.current.value,
      sender: currentUser
    };
    onHandleClick(message);
    inputRef.current.value = '';
  };

  return (
    <div className="container">
      <div className="message_container">
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <Message msg={message} currentUser={currentUser} />
            </li>
          ))}
        </ul>
      </div>
      <div className="write_container">
        <textarea 
          ref={inputRef}
          className="write" 
          placeholder="Ecris ton message ici" 
        ></textarea>
        <button onClick={handleClick} className='send'>
          <img src="/envoyer.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Messagerie;
