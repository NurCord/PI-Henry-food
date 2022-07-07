const { Router } = require('express');
const { Recipe, Diet, Op } = require('../db');
const axios = require('axios');
const { YOUR_API_KEY } = process.env;

const router = Router();

router.get('/', async(req, res) => {
    const { name } = req.query

    try {
        let allRecipes = []
        const allRecipesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${YOUR_API_KEY}`)
            .then((res) => res.data)
            .catch((error) => error);
        allRecipesApi.results?.map(e => {
            allRecipes.push({
                id: e.id,
                title: e.title,
                summary: e.summary.replace(/<[^>]+>/g, ''),
                healthScore: e.healthScore,
                recipe: e.instructions,
                dishTypes: e.dishTypes,
                diet: e.vegetarian === true? [...e.diets, 'vegetarian']: e.diets,
                image: e.image,
            })
        })
        const allRecipesDB = await Recipe.findAll({
            where: {
                name,
            }
        })
        allRecipes = [...allRecipes, allRecipesDB]
        res.status(200).json(allRecipes)
    } catch (error) {
        res.status(400).json('It requires a valid name')
    }
});



//GET /recipes/{idReceta}:
//Obtener el detalle de una receta en particular
//Debe traer solo los datos pedidos en la ruta de detalle de receta
//Incluir los tipos de dieta asociados

router.get('/:id', async(req, res) => {
    const { id } = req.params
    try {
        const recipeDetails = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`)
            .then((res) => res.data)
            .catch((error) => error);
        
        const detail = {
            name: recipeDetails.title,
            summary: recipeDetails.summary.replace(/<[^>]+>/g, ''),
            healthScore: recipeDetails.healthScore,
            recipe: recipeDetails.instructions,
            image: recipeDetails.image,
            dishTypes: recipeDetails.dishTypes,
            diet: recipeDetails.vegetarian === true? [...recipeDetails.diets, 'vegetarian']: recipeDetails.diets,
        }
        res.status(200).json(detail)
    } catch (error) {
        res.status(400).json('dont found detail')
    }
});

/*POST /recipes:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
Crea una receta en la base de datos relacionada con sus tipos de dietas. */

router.post('/', async(req, res) => {
    const { name, summary, healthScore, recipe, image, diets } = req.body;
    try {

        if (!name) return res.status(400).json('You must enter name');
        if (!summary) return res.status(400).json('You must enter summary');

        const newRecipe = await Recipe.create({
            name,
            summary,
            healthScore,
            recipe,
            image,
        })
        const newDiets = await Diet.findAll({
            where: { name: diets }
        })
        newRecipe.addDiet(newDiets);
        res.status(200).json('Succesfull');
    } catch (error) {
        res.status(400).json('Could not create recipe' + error)
    }
});

module.exports = router;