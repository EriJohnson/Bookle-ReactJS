import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

export default Axios;
