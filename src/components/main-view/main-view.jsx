import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegisterView } from '../register-view/register-view';
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

import './main-view.scss';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      showRegister: false,
    };
  }

  getMovies(token) {
    axios
      .get('https://my-flix-93462.herokuapp.com/movies', {
        headers: { Authorization: 'Bearer ${token}' },
      })
      .then((response) => {
        // Assign the result to the state
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  // code executed right after the component is added to the DOM.
  componentDidMount() {
    // axios
    //   .get('https://my-flix-93462.herokuapp.com/movies')
    //   .then((response) => {
    //     this.setState({
    //       movies: response.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user'),
      });
      this.getMovies(accessToken);
    }
  }

  componentDidUpdate() {
    // code executed right after component's state or props are changed.
  }

  componentWillUnmount() {
    // code executed just before the moment the component gets removed from the DOM.
  }

  /* 
  When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*
  */
  setSelectedMovie(newSelectedMovie) {
    this.setState({ selectedMovie: newSelectedMovie });
  }

  /*
  When a user successfully logs in, this function updates the `user` property in state to that *particular user*
  */
  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  /**
  The functin to register new user
   */
  onVisitRegister() {
    this.setState({ showRegister: true });
  }

  onRegistration(username) {
    this.setState({
      user: {
        name: username,
      },
    });
  }

  onloggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null,
    });
  }

  render() {
    let { movies, selectedMovie, user, showRegister } = this.state;
    console.log(showRegister);
    /**
     If the visitor is not registered as a user, the RegistrationView is rendered. If there is no user, the LoginView is rendered.
    */

    if (!user && showRegister)
      return (
        <div className='main-view'>
          <RegisterView onRegistration={(user) => this.onRegistration(user)} />
        </div>
      );

    /*
    If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*
    */
    if (!user)
      return (
        <Col>
          <LoginView
            onLoggedIn={(user) => this.onLoggedIn(user)}
            onVisitRegister={() => this.onVisitRegister()}
          />
        </Col>
      );

    // Before the movies have been loaded
    if (movies.length === 0) return <div className='main-view' />;

    return (
      <Router>
        <Container>
          <h5>Hello there, {this.state.user.name}</h5>
          <Row className='main-view justify-content-md-center'>
            {/*
          If the state of the `selectedMovie` is not null, the selected movie will be returned otherwise, all *movies will be returned*
          */}
            {/* {selectedMovie ? (
            <Col md={8}>
              <MovieView
                movie={selectedMovie}
                onBackClick={(newSelectedMovie) => {
                  this.setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ) : (
            movies.map((movie) => (
              <Col md={4}>
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  onMovieClick={(movie) => {
                    this.setSelectedMovie(movie);
                  }}
                />
              </Col>
            ))
          )} */}
            <Route
              exact
              path='/'
              render={() => {
                return movies.map((m) => (
                  <Col md={3} key={m._id}>
                    <MovieCard movie={m} />
                  </Col>
                ));
              }}
            />
            <Route
              path='/movies/:movieId'
              render={({ match }) => {
                return (
                  <Col md={8}>
                    <MovieView
                      movie={movies.find((m) => m._id === match.params.movieId)}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />
          </Row>
          <button
            onClick={() => {
              this.onloggedOut();
            }}
          >
            Logout
          </button>
        </Container>
      </Router>
    );
  }
}
