/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
  title: 'pasta',
  summary: 'hervir agua',
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipe', () => {
    it('should get 200', () =>
      agent.get('/recipe').expect(200)
    );
  });
  describe('POST /recipe', () => {
    it('should return status 400 if any of the mandatory parameters is not send',() => {
      agent.post('/recipe').expect(400);
    });
  });
   it('should return status 200 and recipe object if the recipe was succesfully created', async () => {
    let reci = { 
      nameRecipe: "Puchero", 
      summary: "Pomelo Salad with Chile, Lime, Peanuts, and Coconut might be just the main course you are searching for. For <b>$2.41 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals.", 
      healthScore: 45, 
      recipe: "Whisk palm sugar and 1 Tbsp. water in a medium bowl to dissolve sugar. Whisk in chiles, garlic, lime juice, and fish sauce; season with salt.", 
      img: "https://spoonacular.com/recipeImages/716459-556x370.jpg", 
      dishTypes: "lunch", 
      diets: [4 , 8]
    }
    const res = await agent.post('/recipe')
                        .send(reci).expect(200);
    expect(res.body).keys({
      id: '',
      summary: "Pomelo Salad with Chile, Lime, Peanuts, and Coconut might be just the main course you are searching for. For <b>$2.41 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals.",
      healthScore: 45,
      recipe: "Whisk palm sugar and 1 Tbsp. water in a medium bowl to dissolve sugar. Whisk in chiles, garlic, lime juice, and fish sauce; season with salt.",
      image: "https://spoonacular.com/recipeImages/716459-556x370.jpg",
      dishTypes: "lunch",
      title: "Puchero"
    });
  });
  describe('GET /diet', () => {
    it('should get 200', () =>
      agent.get('/diet').expect(200)
    );
  });
});

