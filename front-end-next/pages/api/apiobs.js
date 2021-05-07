import axios from 'axios';

const apiobs = axios.create({
  baseURL: 'http://192.168.1.173:3333',
});

export default apiobs;
