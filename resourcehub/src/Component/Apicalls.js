import axios from 'axios'


const config = {
  url: {
    API_BASE_URL: 'http://localhost:8080',
    API_BASE_URL1: 'http://localhost:8081',
    API_BASE_URL2: 'http://localhost:8082',
    API_BASE_URL3: 'http://localhost:8083',
    API_BASE_URL4: 'http://localhost:8084'  
  }
}

export const Apicalls = {
        Signup,
        Login,
        getDepts,
        getSems,
        getSubjects,
        getTopics,
        getTopicsByunit,
        getContents,
        addRequest,
        getRequests
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
function getDepts()
{
  return instance.get('/api/department')   
}
function getSems()
{
  return instance.get('/api/semester')   
}
function getSubjects()
{
  return instance1.get('/api/subjects')
}
function getTopics()
{
  return instance1.get('/api/topics')
}
function getTopicsByunit(sid,unit)
{
  return instance1.get(`/api/topics/subject/${sid}/unit/${unit}`)
}
function getContents(topicid,type)
{
  return instance2.get(`/api/contents/topic/${topicid}/type/${type}`)
}
function getRequests()
{
  return instance3.get('/api/requests')
}
function addRequest(req)
{
    return instance3.post('/api/requests', req, {
        headers: { 'Content-type': 'application/json' }
      })
}
const instance = axios.create({
    baseURL: config.url.API_BASE_URL
  })
  const instance1 = axios.create({
    baseURL: config.url.API_BASE_URL1
  })
  const instance2 = axios.create({
    baseURL: config.url.API_BASE_URL2
  })
  const instance3 = axios.create({
    baseURL: config.url.API_BASE_URL3
  })
  const instance4 = axios.create({
    baseURL: config.url.API_BASE_URL4
  })
  