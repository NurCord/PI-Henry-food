export const initialState = {
    nameRecipe: '',
    img: 'https://www.clara.es/medio/2021/12/15/comidas-rapidas_a2766867_1280x1090.jpg',
    summary: '',
    healthScore: 0,
    recipe: '',
    diets: []
}

export function validate(input) {
    let errors = {};

    if (!input.nameRecipe) {
      errors.nameRecipe = 'The name of the recipe is required';
    } else if (!/^[A-Za-z]{1,255}/.test(input.nameRecipe)) {
      errors.nameRecipe = 'The name of the recipe is invalid';
    }
    
    if(!input.img){
        errors.img = ''
    }else if(!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{1,20})([\/\w \.-]*)*\/?$|\0/.test(input.img)){
        errors.img = 'Image is invalid';
    }
    
    if (!input.summary) {errors.summary = 'The summary of the recipe is required';}

    if (!/^[1][0][0]$|^[0-9][0-9]?$/.test(input.healthScore)) {errors.healthScore = 'Health score must be between 0 and 100'}

    return errors;
}