import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
  CardGroup,
} from 'react-bootstrap';

import './register-view.scss';
import axios from 'axios';

export function RegisterView(props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Declare hook for each input
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  // Validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr('Username is required');
      isReq = false;
    } else if (username.length < 2) {
      setUSernameErr('Username must be at least 2 characters');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password is required');
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr('Password must be at least 6 characters');
      isReq = false;
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send a request to the server for authentication */
      axios
        .post('https://my-flix-93462.herokuapp.com/register', {
          Username: username,
          Password: password,
        })
        .then((response) => {
          const data = response.data;
          props.onRegistration(data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Header>Please Register</Card.Header>
              <Form>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type='email'
                    value={email}
                    placeholder='Email address'
                    onChange={(e) => {
                      setEmail(e.target.value);
                      required;
                    }}
                  ></Form.Control>
                </Form.Group>

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
                  {usernameErr && <p>{usernameErr}</p>}
                </Form.Group>

                <Form.Group controlId='formPassword'>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></Form.Control>
                  {/** code added here to display validation error */}
                  {passwordErr && <p>{passwordErr}</p>}
                </Form.Group>

                <Button variant='primary' type='submit' onClick={handleSubmit}>
                  Sign Up
                </Button>
              </Form>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

RegisterView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};
