import React, { Component } from "react";
import BookDataService from "../services/book.service";
export default class AddBook extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAuthors = this.onChangeAuthors.bind(this);
    this.onChangePublisher = this.onChangePublisher.bind(this);
    this.onChangePublishYear = this.onChangePublishYear.bind(this);
    this.onChangeSummary = this.onChangeSummary.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.newBook = this.newBook.bind(this);
    this.state = {
      id: null,
      name: "",
      authors: "", 
      publisher: "",
      publishYear: null,
      summary: "",

      submitted:false
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeAuthors(e) {
    this.setState({
      authors: e.target.value
    });
  }
  onChangePublisher(e) {
    this.setState({
      publisher: e.target.value
    });
  }
  onChangePublishYear(e) {
    this.setState({
      publishYear: e.target.value
    });
  }
  onChangeSummary(e) {
    this.setState({
      summary: e.target.value
    });
  }
  saveBook() {
    var data = {
      name: this.state.name,
      authors: this.state.authors,
      publisher: this.state.publisher,
      publishYear: this.state.publishYear,
      summary: this.state.summary
    };
    BookDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          authors: response.data.authors,
          publisher: response.data.publisher,
          publishYear: response.data.publishYear,
          summary: response.data.summary,

          submitted:true
        });
        console.log(response.data);
      })
      .catch(e => {
        alert("Unable to insert. Please verify if entry is not a duplicate.")
        console.log(e);
      });
  }
  newBook() {
    this.setState({
      id: null,
      name: "",
      authors: "",
      publisher: "",
      publishYear: null,
      summary: "",

      submitted: false
    });
  }
  render() {
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
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="authors">Authors</label>
              <input
                type="text"
                className="form-control"
                id="authors"
                required
                value={this.state.authors}
                onChange={this.onChangeAuthors}
                name="authors"
              />
            </div>
            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                className="form-control"
                id="publisher"
                value={this.state.publisher}
                onChange={this.onChangePublisher}
                name="authors"
              />
            </div>
            <div className="form-group">
              <label htmlFor="publishYear">Year</label>
              <input
                type="number"
                className="form-control"
                id="publishYear"
                value={this.state.publishYear}
                onChange={this.onChangePublishYear}
                name="publishYear"
              />
            </div>
            <div className="form-group">
              <label htmlFor="summary">Summary</label>
              <input
                type="text"
                className="form-control"
                id="summary"
                value={this.state.summary}
                onChange={this.onChangeSummary}
                name="summary"
              />
            </div>
            <button style={{marginTop:"10px"}}
              onClick={this.saveBook} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}