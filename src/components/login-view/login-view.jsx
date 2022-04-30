import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RegisterView } from '../register-view/register-view';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

  return (
    <div>
      <Form>
        <Form.Group controlId='formUsername'>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type='text'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='formPassword'>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit' onClick={handleSubmit}>
          Login
        </Button>
      </Form>

      <span>
        Don't have any account?{' '}
        <Button variant='link' onClick={props.onVisitRegister}>
          Register
        </Button>
      </span>
    </div>
  );
}

LoginView.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};
