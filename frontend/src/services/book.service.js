import http from "../http-common";
class BookDataService {
  getAll() {
    return http.get("/books");
  }
  get(id) {
    return http.get(`/books/${id}`);
  }
  create(data) {
    return http.post("/books", data);
  }
  update(id, data) {
    return http.put(`/books/${id}`, data);
  }
  delete(id) {
    return http.delete(`/books/${id}`);
  }
  findByAuthor(author) {
    return http.get(`/books/author?author=${author}`);
  }
  findByPublisher(publisher) {
    return http.get(`/books/publisher?publisher=${publisher}`);
  }
}
export default new BookDataService();