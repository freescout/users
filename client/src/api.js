import axios from 'axios';
//const serverApiPort = process.env.PORT || 3001;
//const serverApiBaseUrl = `http://localhost:${serverApiPort}/api`
const serverApiBaseUrl = `https://scot-users.herokuapp.com/api`
console.log(`Server API URL base ${serverApiBaseUrl}`);

export default axios.create({
  baseURL: serverApiBaseUrl
});