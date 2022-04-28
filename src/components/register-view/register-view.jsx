import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './register-view.scss';

export function RegisterView(props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, username, password);
    /* Send a request to the server for authentication */
    /* then call props on registored user(username) */
    props.onRegistration(username);
  };

  return (
    <div className='registration-form'>
      <form>
        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Username:
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='button' onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}

RegisterView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};
