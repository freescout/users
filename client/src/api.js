import axios from 'axios';
const PORT = process.env.PORT || 3001;

export default axios.create({
  baseURL: `http://localhost:${PORT}/api`
});