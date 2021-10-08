import Axios from './axios';
import composeStartIndexQuery from '../utils/composeStartIndexQuery';

export default {
  index: async function (query: string, page: string = '0') {
    try {
      const response = await Axios.get(
        `volumes?q=${query}&startIndex=${composeStartIndexQuery(page)}`
      );

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
