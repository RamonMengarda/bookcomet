import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddBook from "./components/add-book.component";
import AddInventory from "./components/add-inventory.component";
import BooksList from "./components/books-list.component";
import InventoryList from "./components/inventory-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/books" className="navbar-brand">
            BookComet
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/books"} className="nav-link">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/inventory"} className="nav-link">
                Inventory
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<BooksList/>} />
            <Route exact path="/books" element={<BooksList/>} />
            <Route exact path="/inventory" element={<InventoryList/>} />
            <Route exact path="/books/add" element={<AddBook/>} />
            <Route exact path="/inventory/add" element={<AddInventory/>} />
          </Routes>
        </div>
      </div>
    );
  }
}
export default App;