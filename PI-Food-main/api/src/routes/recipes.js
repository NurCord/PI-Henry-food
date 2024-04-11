const { Router } = require('express');
const { Recipe, Diet } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');
const { YOUR_API_KEY } = process.env;

const router = Router();

router.get('/', async (req, res) => {
    const { name } = req.query

    try {
        if (name) {
            let allRecipes = []
            const allRecipesApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${YOUR_API_KEY}`)).data;
            allRecipesApi.results?.map(e => {
                allRecipes.push({
                    id: e.id,
                    title: e.title,
                    summary: e.summary.replace(/<[^>]+>/g, ''),
                    healthScore: e.healthScore,
                    recipe: "No hay receta disponible",
                    dishTypes: e.dishTypes[0],
                    diet: e.vegetarian === true && !e.diets.some(e => e === 'vegetarian')? [...e.diets, 'vegetarian'] : e.diets,
                    image: e.image,
                })
            })
            let allRecipesDB = await Recipe.findAll({
                where: {
                    title : {[Op.iLike]: `%${name}%`}
                },
                include: Diet
            })
            allRecipes = allRecipes.concat(allRecipesDB)
            res.status(200).json(allRecipes)
        } else {
            let allRecipes = []
            let allRecipesDB = await Recipe.findAll({
                include: Diet
            })
            allRecipesDB.map(e => {
                allRecipes.push(e)
            })
            const allRecipesApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${YOUR_API_KEY}`)).data;
            allRecipesApi.results?.map(e => {
                allRecipes.push({
                    id: e.id,
                    title: e.title,
                    summary: e.summary.replace(/<[^>]+>/g, ''),
                    healthScore: e.healthScore,
                    dishTypes: e.dishTypes[0],
                    recipe: "No hay receta disponible",
                    diet: e.vegetarian === true && !e.diets.some(e => e === 'vegetarian')? [...e.diets, 'vegetarian'] : e.diets,
                    image: e.image,
                })
            })
            res.status(200).json(allRecipes)
        }
    } catch (error) {
        res.status(400).json('It requires a valid name' + error)
    }
});



//GET /recipes/{idReceta}:
//Obtener el detalle de una receta en particular
//Debe traer solo los datos pedidos en la ruta de detalle de receta
//Incluir los tipos de dieta asociados

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        let detail = {}
        let test = id.split('').some(e => isNaN(e))
        if(test){
            detail = await Recipe.findOne({
                where: {
                    id: id,
                },
                include: Diet
            })
            res.status(200).json(detail)
        }
        if(!test){
            const recipeDetails = (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`)).data;
            detail = {
                id: recipeDetails.title,
                title: recipeDetails.title,
                summary: recipeDetails.summary.replace(/<[^>]+>/g, ''),
                healthScore: recipeDetails.healthScore,
                recipe: recipeDetails.instructions,
                image: recipeDetails.image,
                dishTypes: recipeDetails.dishTypes[0],
                diet: recipeDetails.vegetarian === true && !recipeDetails.diets.some(e => e === 'vegetarian')? [...recipeDetails.diets, 'vegetarian'] : recipeDetails.diets,
            }
            res.status(200).json(detail)
        } 
    } catch (error) {
        res.status(400).json('dont found detail' + error)
    }
});

/*POST /recipes:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
Crea una receta en la base de datos relacionada con sus tipos de dietas. */

router.post('/', async (req, res) => {
    const { nameRecipe, summary, healthScore, recipe, img, dishTypes, diets } = req.body;
    try {
        if (!nameRecipe) return res.status(400).json('You must enter name');
        if (!summary) return res.status(400).json('You must enter summary');
        const [newRecipe, created] = await Recipe.findOrCreate({
            where: {
                title: nameRecipe,
            },
            defaults: {
                summary: summary,
                healthScore: healthScore,
                recipe: recipe,
                image: img,
                dishTypes: dishTypes
            }
        })
        newRecipe.addDiet(diets);
        res.status(200).json(newRecipe);
    } catch (error) {
        res.status(400).json('Could not create recipe' + error)
    }
});

module.exports = router;
