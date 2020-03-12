import * as axios from 'axios';
// import { API } from './config';

const getUsers = async function(page) {
  
  try {
    
    const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`);

    let data = parseList(response);
    
    return data.results;

  } catch (error) {
    //console.error(error);
    return [];
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const Data = {
  getUsers
};
