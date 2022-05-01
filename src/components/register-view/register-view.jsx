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
