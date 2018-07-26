import {api} from './axiosConfig';

function setJobs(jobs){
    return {
        type: "SET_JOBS",
        payload: jobs
    }
}

export function searchJobs(params){
    return dispatch => {
        api.searchJobs("/api/jobs/searchAll", params)
        .then(response => {
            dispatch(setJobs(response.data));
        })
        .catch(err => console.log(err))
    }
}