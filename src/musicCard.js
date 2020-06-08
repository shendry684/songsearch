import React from 'react';

export default function MusicCard({album}) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={`http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&api_key=47983be0b870798dacb85e5faa8234f9${album.poster_path}`}
        alt={album.title + ' poster'}
      />
      <div className="card--content">
        <h3 className="card--title">{album.title}</h3>
        <p>
          <small>RELEASE DATE: {album.release_date}</small>
        </p>
        <p>
          <small>RATING: {album.vote_average}</small>
        </p>
        <p className="card--desc">{album.overview}</p>
      </div>
    </div>
  );
}
