import React from 'react';

export const About = () => {
  return (
    <div className="App">
      <h1>About Page</h1>
      This app is a reading list of books separated into three categories:
      currently reading, wanting to read, and read. The user can update the
      status of the books via the drop down selections. Once a book has been
      completed, the user selects the read selection in the dropdown, and the
      finished book is moved into the read category. The book search page allows
      the user to search for a book and add it into one of the three
      aforementioned categories. There is also a reviews page for books that
      have been finished. The Book API has been provided by Udacity, which
      contains a certain amount of books.
    </div>
  );
};
