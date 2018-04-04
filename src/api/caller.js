import axios from 'axios';

function getCaller() {
  var caller = axios.create({
    baseURL: 'http://localhost:54043'
  });

  // caller.defaults.headers.common['Authorization'] = AUTH_TOKEN;

  return caller;
}

export const caller = getCaller();
