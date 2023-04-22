import axios from 'axios'


const config = {
  url: {
    API_BASE_URL: 'http://localhost:8080'
  }
}

export const Apicalls = {
        Signup,
        Login
}
function Signup(user)
{
    return instance.post('/api/users/signup', user, {
        headers: { 'Content-type': 'application/json' }
      })
}
function Login(email , password)
{
    return instance.post('/api/users/login', { 'email':email, 'password':password }, {
        headers: { 'Content-type': 'application/json' }
      })   
}

const instance = axios.create({
    baseURL: config.url.API_BASE_URL
  })
  