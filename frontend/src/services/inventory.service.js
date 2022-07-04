import http from "../http-common";
class BookDataService {
  getAll() {
    return http.get("/inventory");
  }
  get(id) {
    return http.get(`/inventory/${id}`);
  }
  create(data) {
    return http.post("/inventory", data);
  }
  update(id, data) {
    return http.put(`/inventory/${id}`, data);
  }
  delete(id) {
    return http.delete(`/inventory/${id}`);
  }
  deleteAll() {
    return http.delete(`/inventory`);
  }
  findByTitle(title) {
    return http.get(`/inventory?title=${title}`);
  }
}
export default new BookDataService();