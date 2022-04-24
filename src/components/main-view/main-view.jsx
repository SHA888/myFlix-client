import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: 1,
          Title: 'Inception',
          Description:
            'Inception is a 2010 stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person idea into a target subconscious.',
          ImagePath:
            'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
          Genre: 'Science Fiction',
          Director: 'Christopher Nolan',
        },
        {
          _id: 2,
          Title: 'The Shawshank Redemption',
          Description:
            'The Shawshank Redemption is a 1994 American film based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence.',
          ImagePath:
            'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
          Genre: 'Drama',
          Director: 'Frank Darabont',
        },
        {
          _id: 3,
          Title: 'Gladiator',
          Description:
            'Gladiator is a 2000 epic historical drama film stars Russell Crowe, portrays Roman general Maximus Decimus Meridius, who is betrayed when Commodus, the ambitious son of Emperor Marcus Aurelius, murders his father and seizes the throne. Reduced to slavery, Maximus becomes a gladiator and rises through the ranks of the arena to avenge the murders of his family and his emperor.',
          ImagePath:
            'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Gladiator_%282000_film_poster%29.png/220px-Gladiator_%282000_film_poster%29.png',
          Genre: 'Drama',
          Director: 'Ridley Scott ',
        },
      ],
      selectedMovie: null,
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({ selectedMovie: newSelectedMovie });
  }

  render() {
    let { movies, selectedMovie } = this.state;

    if (movies.length === 0)
      return <div className='main-view'>The list is empty!</div>;

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
}
