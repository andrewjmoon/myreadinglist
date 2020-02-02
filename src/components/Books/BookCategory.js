import React, { useState } from 'react';
import BookShelf from './CategoryOrganizer';
import AddBook from './AddBook';

const BookCategory = props => {
  const [categories] = useState([
    { category: 'Currently Reading', title: 'currentlyReading', id: 1 },
    { category: 'Want to Read', title: 'wantToRead', id: 2 },
    { category: 'Read', title: 'read', id: 3 }
  ]);

  return (
    <div className="list-books-content">
      <div className="library-body">
        {/* First shelf component */}
        {categories.map(({ category, title, id }) => {
          return (
            <div key={id}>
              <BookShelf
                books={props.books}
                updateBookStatus={props.updateBookStatus}
                category={category}
                title={title}
              />
            </div>
          );
        })}
      </div>
      <AddBook />
    </div>
  );
};

export default BookCategory;
