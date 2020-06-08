import React from 'react';
import SearchAlbums from './SearchAlbums';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Album Search</h1>
        <SearchAlbums />
      </div>
    );
  }
}

export default App;
