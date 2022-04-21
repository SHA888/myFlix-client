import React from 'react';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [
        { _id: 1, Title: 'Inception', Description: 'desc1', ImagePath: 'images/1' },
        { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2', ImagePath: 'images/2' },
        { _id: 3, Title: 'Gladiator', Description: 'desc3', ImagePath: 'images/3' }
      ]
    }
  }

  render() {
    return (
      <div className='main-viev'>
        <div>Inception</div>
        <div>The Shawshank Redemption</div>
        <div>Gladiator</div>
      </div>
    );
  }
}
