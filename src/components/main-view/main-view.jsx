import React from 'react';

import { MovieCard } from '../movie-card/movie-card';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: 'Inception',
          Description: 'desc1',
          ImagePath: 'images/1',
        },
        {
          _id: 2,
          Title: 'The Shawshank Redemption',
          Description: 'desc2',
          ImagePath: 'images/2',
        },
        {
          _id: 3,
          Title: 'Gladiator',
          Description: 'desc3',
          ImagePath: 'images/3',
        },
      ],
    };
  }

  render() {
    let { movies } = this.state;

    if (movies.length === 0) {
      return <div className='main-view'>The list is empty!</div>;
    } else {
      return (
        <div className='main-view'>
          {movies.map((movie) => {
            return <MovieCard key={movie._id} movieData={movie} />;
          })}
        </div>
      );
    }
  }
}
