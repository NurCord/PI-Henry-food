//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { Diet } = require('./src/db')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, async() => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    //Pre-cargo los tipos de dietas en la base de datos
    const dietas = [
      {name:  "dairy free" , definition: 'A dairy-free diet excludes all dairy products. This category includes milk from any animal, as well as any product made from this milk, such as cheese, yogurt, butter, and cream. Yet, people who follow this eating pattern may still eat other animal foods like meat, fish, shellfish, and eggs.'},
      {name: "gluten free" , definition: 'Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).'},
      {name: 'lacto ovo vegetarian', definition: 'All ingredients must be vegetarian,none of the ingredients can be or contain dairy and none of the ingredients can be or contain egg.'},
      {name: "vegan", definition: 'A vegan diet excludes animals and their byproducts. That means that vegans do not eat meat, poultry, fish, eggs, milk or other dairy products, or honey.'},
      {name: "vegetarian", definition: 'No ingredients may contain meat or meat by-products, such as bones or gelatin.'},
      {name: "paleolithic", definition: 'Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.'},
      {name: "primal", definition: 'Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.'},
      {name: "whole 30", definition: 'Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.'},
      {name: "pescatarian", definition: 'Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.'},
      {name: "ketogenic", definition: 'The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.'},
    ];
    await dietas.forEach(async (element) => await Diet.create({ name: element.name, definition: element.definition}));
    console.log("Tipos de dieta pre-cargadas");
  });
});




