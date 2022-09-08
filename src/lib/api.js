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

  getAllUsers() {
    const token = localStorage.getItem("jwt");
    return base
      .get("/users", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data);
  },
  getFriendList(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/friend-list", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },

  SearchUser(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/user-query", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },

  FriendRequest(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/add-friend", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },

  FriendRequestList(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/friend-requests", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },

  AcceptFriendRequest(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/accept-friend-request", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },
  RejectFriendRequest(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/reject-friend-request", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },

  getFriendsBookList(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/friends-library", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },
  getBookDetails(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/find-book", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },

  CommentBook(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/comment-book", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },
  DeleteComment(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/delete-comment", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },
  reviewBook(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/review-book", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },
  getOneUser(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/get-one-user", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },

  deleteBook(id) {
    const token = localStorage.getItem("jwt");
    return base
      .delete(`/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },
};

export default services;
