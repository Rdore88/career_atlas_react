import {api} from './axiosConfig';

function setJobs(jobs){
    return {
        type: "SET_JOBS",
        payload: jobs
    }
}

// TODO: Add better error handling
export function searchJobs(params){
    return dispatch => {
        return api.searchJobs("/jobSearch/indeed", params)
        .then(response => {
            dispatch(setJobs(response.data.results));
            return true
        })
        .catch(err => console.log(err))
    }
}
