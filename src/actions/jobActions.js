import api from './axiosConfig';

function setJobs(jobs){
    return {
        type: "SET_JOBS",
        payload: jobs
    }
}

export function searchJobs(params){
    api.searchJobs("/jobs/searchAll", params)
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log(err))
}