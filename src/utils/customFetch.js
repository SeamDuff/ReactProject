import axios from "axios"

const getProducts = () => {
  return axios.get('https://62ae183b645d00a28a0497aa.mockapi.io/productos')
  .then(product => {
    return product.data
})
}

// const getProductById = () => {
//   return axios.get(`https://62ae183b645d00a28a0497aa.mockapi.io/productos/${2}`)
//   .then(product => {
//     return product.data
// })
// }

export default getProducts