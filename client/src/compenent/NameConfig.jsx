import { useState } from 'react';

function NameConfig({ onSubmit }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className='nameConfig'>
      <div className='name_container'>
        <input
          type="text"
          placeholder='Pseudo'
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <button type="submit">Entrer</button>
    </form>
  );
}

export default NameConfig;