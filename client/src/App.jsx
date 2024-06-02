import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Messagerie from './compenent/Messagerie';
import NameConfig from './compenent/NameConfig';

const socket = io('http://localhost:3000');

function App() {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    socket.on('initialMessages', (initialMessages) => {
      setMessages(initialMessages);
    });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('initialMessages');
      socket.off('message');
    };
  }, []);

  const handleClick = (message) => {
    if (message.text !== '') {
      socket.emit('message', message);
    }
  };

  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  return (
    <div className='app'>
      {currentUser ? (
        <div className='user-interface'>
          <h2>{currentUser}</h2>
          <Messagerie 
            messages={messages}
            onHandleClick={handleClick}
            currentUser={currentUser}
          />
        </div>
      ) : (
        <NameConfig onSubmit={handleLogin} />
      )}
    </div>
  );
}

export default App;
