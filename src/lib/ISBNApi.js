import axios from "axios";

const baseURL = process.env.REACT_APP_ISBNAPI_URL;

const base = axios.create({ baseURL });

const ISBNApi = {
  getDetailsFromISBN(ISBN) {
    return base.get(`${ISBN}.json`).then((res) => res.data);
  },

  getAuthorDetails(URL) {
    return base
      .get(`https://openlibrary.org${URL}.json`)
      .then((res) => res.data);
  },
};

export default ISBNApi;
