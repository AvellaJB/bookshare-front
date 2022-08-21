import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const base = axios.create({ baseURL });

const services = {
  getBookList() {
    const token = localStorage.getItem("jwt");
    return base
      .get("/bibliotheque", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data);
  },

  register(body) {
    return base.post("/register", body).then((res) => res.data);
  },

  login(body) {
    return base.post("/login", body).then((res) => res.data);
  },

  AddBook(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/add-book", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },
  getBookList() {
    const token = localStorage.getItem("jwt");
    return base
      .get("/bibliotheque", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data);
  },
};

export default services;
