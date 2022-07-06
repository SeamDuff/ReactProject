//Ejemplo de Axios
import axios from 'axios';

export const getProducts = () => {
  return axios
    .get('https://62ae183b645d00a28a0497aa.mockapi.io/productos')
    .then(product => {
      return product.data;
    });
};
