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
    props.onLoggedIn(username);
  };

  const handleNewUser = () => {
    console.log('Register new user');
    return <RegisterView  />;
  };

  return (
    <div>
      <form action=''>
        <label htmlFor=''>
          Username:
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor=''>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type='button' onClick={handleSubmit}>
          Login
        </button>
      </form>
      <span>Don't have account? <a href="#" onClick={handleNewUser}>Register</a></span>
    </div>
  );
}

LoginView.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};