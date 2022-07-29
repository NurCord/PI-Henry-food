import { ALL_RECIPES, ALL_RECIPES_BY_ID, ALL_DIETS, ALL_RECIPES_BY_NAME, POST_RECIPE} from "./variables";
import axios from 'axios';

export const allRecipes = ()=> async (dispatch)=>{
    try {
        const allRecipesApi = await axios.get(`/recipe`);
        dispatch({
            type: ALL_RECIPES,
            payload: allRecipesApi.data
        })
    } catch (error) {
        return alert(error)
    }
}

export const allRecipesByName = (name)=> async(dispatch)=>{
    try {
        const recipeName = (await axios.get(`/recipe?name=${name}`)).data;
        dispatch({
                type: ALL_RECIPES_BY_NAME,
                payload: recipeName
        })
    } catch (error) {
        return alert(error)
    }
}

export const recipeByID = (id)=> async (dispatch)=>{
    try {
        const recipeID = (await axios.get(`/recipe/${id}`)).data;
        dispatch({
            type: ALL_RECIPES_BY_ID,
            payload: recipeID
        })
    } catch (error) {
        return alert(error)
    }
}

export const allDiets = () => async(dispatch)=>{
    try {
        const diet = (await axios.get(`/diet`)).data; 
        dispatch({
            type: ALL_DIETS,
            payload: diet
        })
    } catch (error) {
        return alert(error)
    }
}


export const postRecipes = (payload) => (dispatch)=>{
    try {
        axios.post('/recipe', payload);
        dispatch({
            type: POST_RECIPE,
        })
    } catch (error) {
        return alert(error)
    }
}
