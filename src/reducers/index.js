import { combineReducers } from 'redux'
import { hacksReducer } from './hacks'
import { hacksStepsReducer } from './hacksSteps'
import { createUserReducer } from './addNewUser'

const rootReducer = combineReducers({
    hacksReducer,
    hacksStepsReducer,
    createUserReducer,
});

export default rootReducer