import {ALL_RECIPES, ALL_RECIPES_BY_ID, ALL_RECIPES_BY_NAME, ORDER_UPWARD_DESCENDANT} from "../actions/variables";

let initialState = {
    recipes: [],
    recipesAll: [],
    recipe: {},
}

export default function root(state = initialState, action){
    switch (action.type) {
        case ALL_RECIPES:
            return {
                ...state,
                recipesAll : action.payload,
                recipes: action.payload,
            }
        case ALL_RECIPES_BY_NAME:
            
            return {
                ...state,
                recipes: action.payload,
            }
        case ALL_RECIPES_BY_ID:
            return {
                ...state,
                recipe: action.payload
            }
        case ORDER_UPWARD_DESCENDANT:
            return {
                ...state,
                
            }
        default:
        return {...state}
    }
}
