import Axios from './axios';

export default {
  searchBooks: async function (query: string) {
    try {
      const response = await Axios.get(`volumes?q=${query}`);

      const { items } = response.data;

      return items;
    } catch (error) {
      console.log(`error`, error);
    }
  },
};
