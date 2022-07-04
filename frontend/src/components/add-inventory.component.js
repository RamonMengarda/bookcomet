import React, { Component } from "react";
import BookDataService from "../services/book.service";
import InventoryDataService from "../services/inventory.service";

export default class AddInventory extends Component {
  constructor(props) {
    super(props);
    this.onChangeBook = this.onChangeBook.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.saveInventory = this.saveInventory.bind(this);
    this.newInventory = this.newInventory.bind(this);
    this.retrieveBooks = this.retrieveBooks.bind(this);
    this.state = {
      id: null,
      book: null,
      quantity: null, 

      books: [],
      currentBook: null,
      currentIndex: -1,
      
      submitted:false
    };
  }
  componentDidMount() {
    this.retrieveBooks();
  }
  onChangeBook(e) {
    this.setState({
      book: e.target.value
    });
  }
  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }
  saveInventory() {
    var data = {
      book: this.state.currentBook,
      quantity: this.state.quantity
    };
    InventoryDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          book: response.data.book,
          quantity: response.data.quantity,
          
          submitted:true
        });
        console.log(response.data);
      })
      .catch(e => {
        alert("Unable to insert. Please verify if entry is not a duplicate.")
        console.log(e);
      });
  }
  newInventory() {
    this.setState({
      id: null,
      book: null,
      quantity: null,

      submitted: false
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
  setActiveBook(book, index) {
    this.setState({
      currentBook: book,
      currentIndex: index
    });
  }
  render() {
    const { books, currentBook, currentIndex } = this.state;
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBook}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="book">Book</label>
              <div>
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
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                min="0"
                className="form-control"
                id="quantity"
                required
                value={this.state.quantity}
                onChange={this.onChangeQuantity}
                name="quantity"
              />
            </div>
            <button style={{marginTop:"10px"}}
              onClick={this.saveInventory} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}