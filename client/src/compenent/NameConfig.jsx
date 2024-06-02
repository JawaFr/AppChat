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
        <label htmlFor="username">Entrez un pseudo </label>
        <input
          type="text"
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