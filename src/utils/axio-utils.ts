import axios from "axios";
import queryString from 'query-string';
export function initAxios() {
  axios.defaults.paramsSerializer = (params) => {
    // [1, 2, 3]=> a=1&a=2&a=3
    return queryString.stringify(params, { arrayFormat: 'none' });
  }

}