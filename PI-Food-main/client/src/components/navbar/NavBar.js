import * as React from "react";
import { useDispatch } from "react-redux";
import { allRecipesByName } from "../../redux/actions/Actions";
import {NavLink} from 'react-router-dom'

export default function NavBar() {
  const [nameRecipe, setNameRecipe] = React.useState('')
  
  let dispatch = useDispatch()

  function handleFilter(text){
      dispatch(allRecipesByName(text))
  }

  const handleSubmit = () => {
    dispatch(allRecipesByName(nameRecipe));
    handleFilter(nameRecipe);
  }

  return (
    <div style={{backgroundColor: 'beige', height: 50}}>
      <input
        type="text"
        placeholder="Search recipe..."
        value={nameRecipe}
        onChange={e => setNameRecipe(e.target.value)}
        style={{ marginRight: 5 }}
      />
      <input type="button" onClick={handleSubmit} value="Search" />
      <NavLink to='/create'>Create your recipe</NavLink>
    </div>

  );
}
