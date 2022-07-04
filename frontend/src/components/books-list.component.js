import React, { Component } from "react";
import BookDataService from "../services/book.service";
import { Link } from "react-router-dom";
export default class BooksList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveBooks = this.retrieveBooks.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveBook = this.setActiveBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.state = {
      books: [],
      currentBook: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }
  componentDidMount() {
    this.retrieveBooks();
  }
  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle
    });
  }
  retrieveBooks() {
    BookDataService.getAll()
      .then(response => {
        this.setState({
          books: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveBooks();
    this.setState({
      currentBook: null,
      currentIndex: -1
    });
  }
  setActiveBook(book, index) {
    this.setState({
      currentBook: book,
      currentIndex: index
    });
  }
  deleteBook() {
    BookDataService.delete(this.state.currentBook.id)
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
        alert("Unable to delete. Please verify if this book is on inventory")
      });
  }
  searchTitle() {
    BookDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          books: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { searchTitle, books, currentBook, currentIndex } = this.state;
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Books List</h4>
          <ul className="list-group">
            {books &&
              books.map((book, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveBook(book, index)}
                  key={index}
                >
                  {book.name}
                </li>
              ))}
          </ul>
          <Link
            to={"/books/add"}
          >
            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={this.removeAllBooks}
            >
              Adicionar novo
            </button>
          </Link>
        </div>
        <div className="col-md-6">
          {currentBook ? (
            <div>
              {!currentBook.format &&
                <h4>Book</h4>
              }
              {currentBook.format &&
                <h4>EBook</h4>
              }
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentBook.name}
              </div>
              <div>
                <label>
                  <strong>Authors:</strong>
                </label>{" "}
                {currentBook.authors}
              </div>
              <div>
                <label>
                  <strong>Publisher:</strong>
                </label>{" "}
                {currentBook.publisher}
              </div>
              <div>
                <label>
                  <strong>Year:</strong>
                </label>{" "}
                {currentBook.publishYear}
              </div>
              <div>
                <label>
                  <strong>Summary:</strong>
                </label>{" "}
                {currentBook.summary}
              </div>
              {currentBook.format && <div>
                <label>
                  <strong>Format:</strong>
                </label>{" "}
                {currentBook.format}
              </div>}
              <div>
                <Link
                  to={"/books/" + currentBook.id}
                >
                  <button
                    className="m-3 btn btn-sm btn-danger"
                  >
                    Edit
                  </button>
                </Link>
              </div>
              <div>
                <button
                  className="m-3 btn btn-sm btn-danger"
                  onClick={this.deleteBook}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Book...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}