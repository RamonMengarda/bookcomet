import React, { Component } from "react";
import BookDataService from "../services/book.service";
import { Link } from "react-router-dom";

export default class BooksList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchAuthor = this.onChangeSearchAuthor.bind(this);
    this.retrieveBooks = this.retrieveBooks.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveBook = this.setActiveBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.searchAuthor = this.searchAuthor.bind(this);
    this.state = {
      books: [],
      currentBook: null,
      currentIndex: -1,
      searchAuthor: ""
    };
  }
  componentDidMount() {
    this.retrieveBooks();
  }
  onChangeSearchAuthor(e) {
    const searchAuthor = e.target.value;
    this.setState({
      searchAuthor: searchAuthor
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
        alert("Unable to delete. Please verify if this book has positive inventory");
      });
  }
  searchAuthor() {
    BookDataService.findByAuthor(this.state.searchAuthor)
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
    const { searchAuthor, books, currentBook, currentIndex } = this.state;
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by author"
              value={searchAuthor}
              onChange={this.onChangeSearchAuthor}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchAuthor}
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
                  {/*The edit button is disbled because there's no implementation for updating book yet*/}
                  <button disabled={true}
                    className="m-3 btn btn-sm btn-danger"
                  >
                    Edit
                  </button>
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