import React, { Component } from 'react';

export default class BookList extends Component {
  render() {
    const { currentBookStatus, updateBookStatus, book } = this.props;
    const { title, authors, imageLinks } = this.props.book;

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${
                  imageLinks ? this.props.book.imageLinks.thumbnail : ' '
                }")`
              }}
            ></div>
            <div className="book-shelf-changer">
              <select
                onChange={e => updateBookStatus(book, e.target.value)}
                value={currentBookStatus}
              >
                <option value="move" disabled>
                  Move book to
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="not on the list">Not on the List</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors && authors.join(' & ')}</div>
        </div>
      </div>
    );
  }
}
