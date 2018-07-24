import update from 'immutability-helper';

const initialState = {
    searchedJobs: [],
}

const jobReducer = function(state = initialState, action){
    switch(action.type){
        case 'SET_JOBS':
            return update(state, {
                searchedJobs: {
                    $set: action.payload
                }
            })
        default:
        return state;
    }
}

export default jobReducer;