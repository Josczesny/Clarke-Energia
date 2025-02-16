import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptadores de requisição
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('clarke_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Interceptadores de resposta
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Redirecionar para login ou renovar token
      localStorage.removeItem('clarke_token');
    }
    return Promise.reject(error);
  }
);

export default api;