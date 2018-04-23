import axios from 'axios';

function getCaller() {
  let caller = axios.create({
    baseURL: 'http://localhost:54043'
  });

  return caller;
}

export const caller = getCaller();
