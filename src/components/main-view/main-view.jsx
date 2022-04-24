import React from 'react';
import axios from 'axios';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({ selectedMovie: newSelectedMovie });
  }

  render() {
    let { movies, selectedMovie } = this.state;

    if (movies.length === 0) return <div className='main-view' />;

    return (
      <div className='main-view'>
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

  componentDidMount() {
    // code executed right after the component is added to the DOM.

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

  componentWillUnmount() {
    // code executed just before the moment the component gets removed from the DOM.
  }

}
