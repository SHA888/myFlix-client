import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegisterView } from '../register-view/register-view';

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

  // code executed right after the component is added to the DOM.
  componentDidMount() {
    axios
      .get('https://my-flix-93462.herokuapp.com/movies')
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
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
  onLoggedIn(user) {
    this.setState({ user });
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
        <LoginView
          onLoggedIn={(user) => this.onLoggedIn(user)}
          onVisitRegister={() => this.onVisitRegister()}
        />
      );

    // Before the movies have been loaded
    if (movies.length === 0) return <div className='main-view' />;

    return (
      <div className='main-view'>
        <p>Hello there, {this.state.user.name}</p>
        {/*
          If the state of the `selectedMovie` is not null, the selected movie will be returned otherwise, all *movies will be returned*
          */}
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}
