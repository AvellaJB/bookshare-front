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
};

export default services;
