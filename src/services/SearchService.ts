import Axios from './axios';

export default {
  searchBooks: async function (query: string) {
    try {
      const response = await Axios.get(`volumes?q=${query}`);

      return response.data;
    } catch (error) {
      console.log(`error`, error);
    }
  },
};
