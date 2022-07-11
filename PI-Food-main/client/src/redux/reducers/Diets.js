import {ALL_DIETS} from '../actions/variables'

let initialState = {
    diets: [],
}

export default function diets(state = initialState, action){
    switch (action.type) {
        case ALL_DIETS:
            return {
                ...state,
                diets: [...state.diets, action.payload]
            }
        default:
        return {...state}
    }
}