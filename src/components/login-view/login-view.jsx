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

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
    /*
    Send a request to the server for authentication then call props.onLoggedIn(username), which provides the username to our parent component (child to parent communication).
     */
    // props.onLoggedIn(username);
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
