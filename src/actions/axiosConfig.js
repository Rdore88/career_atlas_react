import axios from 'axios';
const baseAPI = axios.create();
baseAPI.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const api = {
    searchJobs: (url, params) => {
        return baseAPI.get(url, params)
    }
}
export {
    api
}