import axios from 'axios'

const apiCLient = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/FabianDouch/real-world-vue-json',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiCLient.get('/events')
  }
}
