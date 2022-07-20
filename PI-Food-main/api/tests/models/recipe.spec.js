const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name and summary', () => {
        Recipe.create({ name: 'Milanesa a la napolitana', summary: 'Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box.'});
      });
      it('expect healt score to be a number', (done)=> {
        let reci = {
          title: "Puchero", 
          summary: "Pomelo Salad with Chile, Lime, Peanuts, and Coconut might be just the main course you are searching for", 
          healthScore: 'no soy un numero', 
      }
        Recipe.create(reci)
            .then(() => done(new Error("Could not create recipeSequelizeValidationError: Validation error: Validation isNumeric on healthScore failed,\nValidation error: Validation isInt on healthScore failed")))
            .catch(() => done());
      });
      it('expects the health score to be a number less than or equal to 100', (done)=> {
        let reci = {
          title: "Puchero", 
          summary: "Pomelo Salad with Chile, Lime, Peanuts, and Coconut might be just the main course you are searching for", 
          healthScore: 200, 
      }
        Recipe.create(reci)
            .then(() => done(new Error("Could not create recipeSequelizeValidationError: Validation error: Validation max on healthScore failed")))
            .catch(() => done());
      });
      it('expects the health score to be a number greater than or equal to 0', (done)=> {
        let reci = {
          title: "Puchero", 
          summary: "Pomelo Salad with Chile, Lime, Peanuts, and Coconut might be just the main course you are searching for", 
          healthScore: -44, 
      }
        Recipe.create(reci)
            .then(() => done(new Error("Could not create recipeSequelizeValidationError: Validation error: Validation min on healthScore failed")))
            .catch(() => done());
      });
      it('should throw an error when the url is not sent correctly', (done)=> {
        let reci = {
          title: "Puchero", 
          summary: "Pomelo Salad with Chile, Lime, Peanuts, and Coconut might be just the main course you are searching for", 
          healthScore: 5, 
          image: 'hu'
      }
      Recipe.create({})
      .then(() => done(new Error('SequelizeValidationError: Validation error: Validation isUrl on image failed')))
      .catch(() => done());
      });
    });
  });
});
