import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    <Form>
      <Form.Group controlId='formEmail'>
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type='email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Form.Control>
      </Form.Group>

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
        Sign Up
      </Button>
    </Form>
  );
}

RegisterView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};
