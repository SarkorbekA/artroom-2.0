// Import Axios library
import axios from 'axios';

// Global function to handle API requests
export const useAPI = () => {
  const baseURL = import.meta.env.VITE_APP_BASE_URL;

  // Create axios instance with baseURL and default headers
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
  });

  // Add a request interceptor to include the access token
  instance.interceptors.request.use(
    config => {
      const accessToken = localStorage.getItem('access_token'); // Retrieve access token from localStorage
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // Function to handle GET request
  const get = async (url, params = {}) => {
    try {
      const response = await instance.get(url, { params });
      return response.data;
    } catch (error) {
      console.error('Error while making GET request:', error);
      throw error;
    }
  };

  // Function to handle POST request
  const post = async (url, data, params = {}) => {
    try {
      const response = await instance.post(url, data, { params });
      return response.data;
    } catch (error) {
      console.error('Error while making POST request:', error);
      throw error;
    }
  };

  // Function to handle PUT request
  const put = async (url, data = {}, params = {}) => {
    try {
      const response = await instance.put(url, data, { params });
      return response.data;
    } catch (error) {
      console.error('Error while making PUT request:', error);
      throw error;
    }
  };

  // Function to handle DELETE request
  const remove = async (url, params = {}) => {
    try {
      const response = await instance.delete(url, { params });
      return response.data;
    } catch (error) {
      console.error('Error while making DELETE request:', error);
      throw error;
    }
  };

  // Return functions to be used globally
  return { get, post, put, remove };
};
