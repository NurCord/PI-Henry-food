import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonFilters from "../../components/ButtonFilters";
import NavBar from "../../components/navbar/NavBar";
import Cards from "../../components/cards/Cards";
import { allDiets, allRecipes, allRecipesByName } from "../../redux/actions/Actions";

export default function Home() {
  let state = useSelector(s => s.root.recipes)//estado para filtrar
  let recipesAll = useSelector(s => s.root.recipesAll)//padre nuestro del hijo del espiritu sant

  const [filterData, setFilterData] = React.useState(state);
  const [RecipeAll, setRecipeAll] = React.useState(recipesAll);

  let dispatch = useDispatch()

  React.useEffect(() => {
    setFilterData(state)//name
  }, [state, recipesAll])

  function test2(text, name = false) {

    if (name) {
      if (name === 'selectdiets') {
        dispatch(allRecipes());
      } else {
        let testt = [];
        for (let index = 0; index < state.length; index++) {
          if (state[index]['diet']?.includes(name)) {
            testt.push(state[index])
          }
          else if (state[index]['diets']?.some(j => j.name === name) === true) {
            testt.push(state[index])
          }
        }
        setFilterData(testt)
      }
    } else {
      if (text == '') {
        dispatch(allRecipes());
      } else {
        dispatch(allRecipesByName(text))
      }
    }
  }

  return (
    <div>
      <NavBar handleFilter={(text) => test2(text, false)} />
      <div><ButtonFilters filter={(text, name) => test2(false, name)} /> </div>
      <Cards filterData={filterData} />
    </div>
  );
}
