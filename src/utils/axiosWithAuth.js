import axios from 'axios';

export const axiosWithAuth = () => {

  const token = localStorage.getItem('token');
  
  return axios.create({
    baseURL: '' /* Need to the base URL of our API here */,
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth