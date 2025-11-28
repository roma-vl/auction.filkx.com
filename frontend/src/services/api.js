import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dev.api.auction.filkx.com/api',
  timeout: 5000
})

export default api
