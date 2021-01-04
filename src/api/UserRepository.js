import Repository from "./Repository";

const endPoint = "/users";

export default {
  get() {
    return Repository.get(`${endPoint}`);
  },
  getUser(userId) {
    return Repository.get(`${endPoint}/${userId}`);
  },
  create(payload) {
    return Repository.post(`${endPoint}`, payload);
  },
  update(userId, payload) {
    return Repository.put(`${endPoint}/${userId}`, payload);
  },
  remove(userId) {
    return Repository.delete(`${endPoint}/${userId}`);
  },
};
