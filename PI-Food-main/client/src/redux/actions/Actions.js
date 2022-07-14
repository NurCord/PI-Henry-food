import { ALL_RECIPES, ALL_RECIPES_BY_ID, ALL_DIETS, ALL_RECIPES_BY_NAME, POST_RECIPE} from "./variables";
import axios from 'axios';

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

export const allRecipesByName = (name)=> async (dispatch)=>{
    try {
        await fetch(`http://localhost:3001/recipe?name=${name}`)
            .then( res => res.json())
            .then( res => dispatch({
                type: ALL_RECIPES_BY_NAME,
                payload: res
            }))
    } catch (error) {
        return alert(error)
    }
}

export const recipeByID = (id)=> async (dispatch)=>{
    try {
        const recipeID = (await axios.get(`http://localhost:3001/recipe/${id}`)).data;
        dispatch({
            type: ALL_RECIPES_BY_ID,
            payload: recipeID
        })
    } catch (error) {
        return alert(error)
    }
}

export const allDiets = () => async (dispatch)=>{
    try {
        return fetch('http://localhost:3001/diet')
        .then(response => response.json())
        .then(res => {dispatch({ type: ALL_DIETS, payload: res })})
        .catch (error => console.log(error))
    } catch (error) {
        return alert(error)
    }
}


export const postRecipes = (payload) => async (dispatch)=>{
    try {
        const response = await axios.post('http://localhost:3001/recipe', payload);
        console.log(response);
        dispatch({
            type: POST_RECIPE,
        })
    } catch (error) {
        return alert(error)
    }
}
