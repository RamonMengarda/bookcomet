# Book Comet: Coding Challenge

## Project Overview

This projext's goal was to develop a library system, consisting on regular books and Ebooks.

### Backend
 SpringBoot
  - Actuator
    * Easily monitor application and endpoints
  - JPA
    * Reduces the amount of code needed, replacing it with tags   
  - REST
    * Build a RESTful service with no effort
  - Validation
    * Manage fields constraints 
  - Web
    * Simplifies HTTP requests
  - DevTools
    * Allows better debugging and hot reload
  - Lombok
    * Substitutes constructors, getters/setter for tags
  - H2 database
    * Lightwieght embedded database
 
 ### Frontend
 React

### Pendencies
- Update Book, Ebook and inventory on the frontend- couldn't get the route pattern /xxx/:id to work with React
- Create a toggle/radio button on the book list search bar to alternate between searching by author or searching by publisher, wicj is already implemented on the backend
- Create a +/- button on the inventory list to increase/decrease the quantity (issue related to the update route bug)
- Implement the constraint to only remove a book if the quantity on it's inventory is 0, and automatically remove the inventory too (the reference to the Book would not exist anymore)
