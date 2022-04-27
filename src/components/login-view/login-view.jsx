import React from 'react';
import PropTypes from 'prop-types';
import RegisterView from '../register-view/register-view';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /*
    Send a request to the server for authentication then call props.onLoggedIn(username)
     */
    // props.onLoggedIn(username);
  };

  return (
    <form action=''>
      <label htmlFor=''>
        Username:
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor=''>
        Password:
        <input
          type='password'
          value={password}
          onChange={e=> setPassword(e.target.value)}
        />
      </label>
      <button type='button' onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}
