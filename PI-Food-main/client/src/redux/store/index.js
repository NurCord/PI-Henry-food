import {createStore, applyMiddleware, compose} from 'redux';
import root from '../reducers/Reducer'
import thunk from 'redux-thunk';
//import combineReducer from 'redux'

//let reducers = combineReducer(root)
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    root,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store