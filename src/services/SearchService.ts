import Axios from './axios';

export default {
  index: async function (query: string, page = 1) {
    try {
      const response = await Axios.get(`volumes?q=${query}&startIndex=${page}`);

      const { totalItems } = response.data;
      const { items } = response.data;

      return { items, totalItems };
    } catch (error) {
      console.log(`error`, error);
    }
  },

  show: async function (id: string) {
    try {
      const response = await Axios.get(`volumes/${id}`);

      return response.data;
    } catch (error) {
      console.log(`error`, error);
    }
  },
};
