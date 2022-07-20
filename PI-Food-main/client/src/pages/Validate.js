export const initialState = {
    nameRecipe: '',
    img: '',
    summary: '',
    healthScore: '',
    recipe: '',
    dishTypes: '',
    diets: []
}

export function validate(input) {
    let errors = {};

    if (!input.nameRecipe) {
      errors.nameRecipe = 'The name of the recipe is required';
    } else if (!/^[A-Za-z]{1,255}/.test(input.nameRecipe)) {
      errors.nameRecipe = 'The name of the recipe is invalid';
    }
    
    if(!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{1,20})([\/\w \.-]*)*\/?$|\0/.test(input.img)){
      errors.img = 'Image is invalid';
    }
    
    if (!input.summary) {errors.summary = 'The summary of the recipe is required';}

    if (!/^[1][0][0]$|^[0-9][0-9]?$/.test(input.healthScore)) {errors.healthScore = 'Health score must be between 0 and 100'}

    return errors;
}

