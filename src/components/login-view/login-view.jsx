import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RegisterView } from '../register-view/register-view';
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
  CardGroup,
} from 'react-bootstrap';
import axios from 'axios';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Declare hook for each input
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  // Validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr('USername is required');
      isReq = false;
    } else if (username.length < 2) {
      setUsernameErr('Username must be at least 2 characters');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password is required');
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr('Password must be 6 characters long');
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /** Send request to the server for authentication */
      axios
        .post('https://my-flix-93462.herokuapp.com/login', {
          Username: username,
          Password: password,
        })
        .then((response) => {
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch((e) => {
          console.log('User not found');
        });
    }
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Card style={{ marginTop: 100, marginBottom: 50, width: 300 }}>
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', fontSize: '2rm' }}>
                LOGIN
              </Card.Title>
              <Form className='login-border'>
                <Form.Group controlId='formUsername'>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type='text'
                    value={username}
                    placeholder='Username'
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    required
                  ></Form.Control>
                  {/* code added here to display validation error */}
                  { usernameErr && <p>{usernameErr}</p> }
                </Form.Group>

                <Form.Group controlId='formPassword'>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength='8'
                  ></Form.Control>
                  {/** code added here to display validation error */}
                  { passwordErr && <p>{passwordErr}</p> }
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
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

LoginView.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onLoggedIn: PropTypes.func.isRequired,
};
