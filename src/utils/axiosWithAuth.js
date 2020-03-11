import axios from 'axios';
import {CREATION} from '../res/common';

export const axiosWithAuth= (path, version) => {
  const K= CREATION;
  console.log('K: ', K);

  return axios.create({
    baseURL: `https://api.themoviedb.org/${version}${path}api_key=${K}`
  });
}