import {ALL_RECIPES, ALL_RECIPES_BY_ID, ALL_RECIPES_BY_NAME ,POST_RECIPE } from "../actions/variables";

let initialState = {
    recipes: [],
    recipe: {},
}

export default function root(state = initialState, action){
    switch (action.type) {
        case ALL_RECIPES:
            return {
                ...state,
                recipes: action.payload,
            }
        case ALL_RECIPES_BY_NAME:
            return {
                ...state,
                recipes: action.payload,
            }
            case POST_RECIPE:
                return {
                    ...state,
                }
        case ALL_RECIPES_BY_ID:
            return {
                ...state,
                recipe: action.payload
            }
        default:
        return {...state}
    }
}





