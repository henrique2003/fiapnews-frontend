import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fiapnews.herokuapp.com/api'
})

export default api
