import axios from 'axios';
const PORT = process.env.PORT || 3001;

console.log(`Server API port ${PORT}`);
export default axios.create({
  baseURL: `http://localhost:${PORT}/api`
});