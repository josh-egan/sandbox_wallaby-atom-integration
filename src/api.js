import axios from 'axios'

class Api {
  static version = 2
  
  baseUrl = 'default-base-url'

  constructor(baseUrl) {
    this.baseUrl = baseUrl || this.baseUrl
  }

  getUsers() {
    return axios.get(this.baseUrl + '/users')
  }
}

export default Api
