import { combineReducers } from 'redux';

import JobReducer from './jobReducer';


const rootReducer = combineReducers({
    jobs: JobReducer,
})

export default rootReducer;