import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="App">
      <br />
      <h1>My Reading List App Home Page:</h1>

      <br />
      <Link className="Link2" to="/about">
        <h2>About</h2>
      </Link>
      <br />
      <Link className="Link2" to="/bookshelf">
        <h2>Book Shelf</h2>
      </Link>

      <br />
      <Link className="Link2" to="/search">
        <h2>Book Search Page</h2>
      </Link>
      <br />
      <Link className="Link2" to="/reviews">
        <h2>Reviews</h2>
      </Link>
    </div>
  );
};



