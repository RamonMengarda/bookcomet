import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
      books: []
    };
  
    async componentDidMount() {
      const response = await fetch('/books');
      const body = await response.json();
      this.setState({books: body});
    }
  
    render() {
      const {books} = this.state;
      return (
          <div className="App">
            <header className="App-header">
              <div className="App-intro">
                <h2>Books</h2>
                {books.map(book =>
                    <div key={book.id}>
                      {book.name} ({book.email})
                    </div>
                )}
              </div>
            </header>
          </div>
      );
    }
  }
  export default App;