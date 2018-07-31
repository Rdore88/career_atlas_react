import {api} from './axiosConfig';
import { toUnicode } from 'punycode';

function setJobs(jobs){
    return {
        type: "SET_JOBS",
        payload: jobs
    }
}

// TODO: Add better error handling
export function searchJobs(params){
    return dispatch => {
        return api.searchJobs("/api/jobs/searchAll", params)
        .then(response => {
            dispatch(setJobs(response.data));
            return true
        })
        .catch(err => console.log(err))
    }
}