import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="open-search">
      <Link className="open-search" to="/search">
        Add a book
      </Link>
    </div>
  );
};
