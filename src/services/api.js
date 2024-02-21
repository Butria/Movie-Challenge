import axios from 'axios';
import apiConfig from './apiConfig';

export const getMovies = async () => {
  try {
    const response = await axios.get(`${apiConfig.baseUrl}discover/movie?api_key=${apiConfig.apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error('Error al obtener datos de la API:', error);
    throw new Error('Error al obtener datos de la API');
  }
};