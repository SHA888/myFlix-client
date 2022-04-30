import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      // <div
      //   className='movie-card'
      //   onClick={() => {
      //     onMovieClick(movie);
      //   }}
      // >
      //   <div>
      //     {movie.Title}
      //     <div>{movie.ReleaseYear}</div>
      //     <br />
      //   </div>
      // </div>
      <Card>
        <Card.Img variant='top' src={movie.ImagePath}/>
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Button onClick={() => onMovieClick(movie)} >Open</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ReleaseYear: PropTypes.string,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string,
    }),
    Directors: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Biography: PropTypes.string,
      Birth: PropTypes.string,
      Death: PropTypes.string,
    }),
    ImagePath: PropTypes.string.isRequired,
    Featured: PropTypes.bool,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
