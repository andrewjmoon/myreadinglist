import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Search from './components/Books/Search';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { About } from './components/About';
import Reviews from './components/Reviews';
import BookCategory from './components/Books/BookCategory';

class App extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.fetchBooks();
  }
  fetchBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  updateBookStatus = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books });
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/bookshelf"
              render={() => (
                <BookCategory
                  books={this.state.books}
                  updateBookStatus={this.updateBookStatus}
                />
              )}
            />
            <Route
              exact
              path="/search"
              render={() => (
                <Search
                  updateBookStatus={this.updateBookStatus}
                  books={this.state.books}
                />
              )}
            />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/reviews" component={Reviews} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
