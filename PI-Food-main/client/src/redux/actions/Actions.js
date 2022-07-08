import { SUMA , ALL_RECIPES, ALL_RECIPES_BY_ID, ALL_DIETS} from "./variables";
import axios from 'axios';

export function suma() {
    return {
        type: SUMA
    }
}

export const allRecipes = ()=> async (dispatch)=>{
    try {
        const allRecipesApi = await axios.get(`http://localhost:3001/recipe`);
        dispatch({
            type: ALL_RECIPES,
            payload: allRecipesApi.data
        })
    } catch (error) {
        return alert(error)
    }
}

export const recipeByID = ()=> async (dispatch)=>{
    try {
        const recipeID = await axios.get(`http://localhost:3001/recipe/:id`);
        dispatch({
            type: ALL_RECIPES_BY_ID,
            payload: recipeID.data
        })
    } catch (error) {
        return alert(error)
    }
}

export const allDiets = ()=> async (dispatch)=>{
    try {
        const allDietsApi = await axios.get(`http://localhost:3001/recipe/:id`);
        dispatch({
            type: ALL_DIETS,
            payload: allDietsApi.data
        })
    } catch (error) {
        return alert(error)
    }
}
