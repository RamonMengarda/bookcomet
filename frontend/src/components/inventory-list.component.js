import React, { Component } from "react";
import InventoryDataService from "../services/inventory.service";
import { Link } from "react-router-dom";

export default class InventoryList extends Component {
  constructor(props) {
    super(props);
    this.retrieveInventory = this.retrieveInventory.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveInventory = this.setActiveInventory.bind(this);
    this.deleteInventory = this.deleteInventory.bind(this);
    this.state = {
      inventory: [],
      currentInventory: null,
      currentIndex: -1
    };
  }
  componentDidMount() {
    this.retrieveInventory();
  }
  retrieveInventory() {
    InventoryDataService.getAll()
      .then(response => {
        this.setState({
          inventory: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveInventory();
    this.setState({
      currentInventory: null,
      currentIndex: -1
    });
  }
  setActiveInventory(inventory, index) {
    this.setState({
      currentInventory: inventory,
      currentIndex: index
    });
  }
  deleteInventory() {
    InventoryDataService.delete(this.state.currentInventory.id)
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
        alert("Unable to delete. Please verify if this inventory has Quantity = 0");
      });
  }
  render() {
    const { inventory, currentInventory, currentIndex } = this.state;
    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Inventory</h4>
          <ul className="list-group">
            {inventory &&
              inventory.map((inventoryItem, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveInventory(inventoryItem, index)}
                  key={index}
                >
                  {inventoryItem.book.name}
                </li>
              ))}
          </ul>
          <Link
            to={"/inventory/add"}
          >
            <button
              className="m-3 btn btn-sm btn-danger"
            >
              Adicionar novo
            </button>
          </Link>
        </div>
        <div className="col-md-6">
          {currentInventory ? (
            <div>
              <h4>Details</h4>
              <div>
                <label>
                  <strong>Book Name:</strong>
                </label>{" "}
                {currentInventory.book.name}
              </div>
              <div>
                <label>
                  <strong>Quantity:</strong>
                </label>{" "}
                {currentInventory.quantity}
              </div>
              <div>
                  {/*The edit button is disbled because there's no implementation for updating inventory yet*/}
                  <button disabled={true}
                    className="m-3 btn btn-sm btn-danger"
                  >
                    Edit
                  </button>
              </div>
              <div>
                <button
                  className="m-3 btn btn-sm btn-danger"
                  onClick={this.deleteInventory}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Inventory...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}