import React from 'react';
import PropTypes from 'prop-types';

import './register-view.scss';

export function RegisterView() {
  const handleRegistration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  };

  return (
    <div className='register-form'>
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
        <button type='button' onClick={handleRegistration()}>
          Register
        </button>
      </form>
    </div>
  );
}

RegisterView.propTypes = {
  user: PropTypes.exact({
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};
