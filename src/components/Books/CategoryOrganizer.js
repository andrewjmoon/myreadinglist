import React, { Component } from 'react';
import BookList from './BookList';

export default class BookShelf extends Component {
  render() {
    const { updateBookStatus, books } = this.props;

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.category}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter(book => book.shelf === this.props.title)
                .map(book => (
                  <li key={book.id}>
                    <BookList
                      book={book}
                      updateBookStatus={updateBookStatus}
                      currentBookStatus={this.props.title}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
