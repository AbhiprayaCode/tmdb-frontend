import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.boss-team.site', // Change this to your backend URL
});

export const fetchMovies = (params) => API.get('/movies', { params });