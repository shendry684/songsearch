import React, {useState} from 'react';

export default function SearchAlbums() {
  //states- input query, albums
  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState([]);
  const searchAlbums = async (e) => {
    e.preventDefault();

    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&api_key=&&query=${query}=&page=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setAlbums(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchAlbums}>
        <label className="label" htmlFor="query">
          Album Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Soundgarden"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {albums
          .filter((album) => album.poster_path)
          .map((album) => (
            <div className="card" key={album.id}>
              <img
                className="card--image"
                src={`http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&api_key=${album.poster_path}`}
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
          ))}
      </div>
    </>
  );
}
