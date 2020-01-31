import React, { Component } from 'react';
import * as BooksAPI from '../../BooksAPI';
import BookList from './BookList';
import { Link } from 'react-router-dom';

class Search extends Component {
  state = {
    query: '',
    booksQuery: [],
    error: false
  };

  updateQuery = e => {
    const values = e.target.value;
    this.setState(() => {
      return { query: values };
    });
    this.getBooksQuery(values);
  };

  getBooksQuery = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(booksQuery => {
        if (booksQuery.error) {
          this.setState({ booksQuery: [] });
        } else {
          this.setState({ booksQuery });
        }
      });
    } else {
      this.setState({ booksQuery: [] });
    }
  };

  resetSearch = () => {
    this.setState({ booksQuery: [] });
  };
  render() {
    const { updateBookStatus, books } = this.props;
    const { query, booksQuery } = this.state;
    return (
      <div>
        <div className="search-books">
          <h1 className="App">The Search Bar</h1>
          <div className="search-books-bar">
            <br />
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={this.updateQuery}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {booksQuery.map(booksQuery => {
                let bookStatus = 'not on the list';

                books.forEach(book => {
                  if (book.id === booksQuery.id) {
                    bookStatus = book.bookStatus;
                  }
                });

                return (
                  <li key={booksQuery.id}>
                    <BookList
                      book={booksQuery}
                      updateBookStatus={updateBookStatus}
                      currentBookStatus={bookStatus || ' '}
                      ResetSearch={this.resetSearch}
                    />
                  </li>
                );
              })}
            </ol>
            <Link className="Close" to="/">
              Close Search Bar
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
