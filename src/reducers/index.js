import { combineReducers } from 'redux'
import { hacksReducer } from './hacks'
import { hacksStepsReducer } from './hacksSteps'
import { createUserReducer } from './addNewUser'
import { newHackReducer } from './newHack'

const rootReducer = combineReducers({
    hacksReducer,
    hacksStepsReducer,
    createUserReducer,
    newHackReducer
});

export default rootReducer