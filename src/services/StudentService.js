import {api} from "boot/axios";
class StudentService {
  getAll() {
    return api.get("/users");
  }

  get(id) {
    return api.get(`/users/${id}`);
  }

  create(data) {
    console.log(data);
    return api.post("/signup", data);
  }

  update(id, data) {
    return api.put(`/users/${id}`, data);
  }

  delete(id) {
    return api.delete(`/users/${id}`);
  }

  deleteAll() {
    return api.delete(`/users`);
  }

  findByTitle(title) {
    return api.get(`/users?title=${title}`);
  }
}

export default new StudentService();
