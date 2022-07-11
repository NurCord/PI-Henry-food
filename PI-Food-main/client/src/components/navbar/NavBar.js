import * as React from "react";
import { useDispatch } from "react-redux";
import { allRecipesByName } from "../../redux/actions/Actions";

export default function NavBar({ handleFilter }) {
  const [nameRecipe, setNameRecipe] = React.useState('')

  const handleSubmit = () => {
    dispatch(allRecipesByName(nameRecipe));
    handleFilter(nameRecipe);
  }
  let dispatch = useDispatch()

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipe..."
        value={nameRecipe}
        onChange={e => setNameRecipe(e.target.value)}
        style={{ marginRight: 5 }}
      />
      <input type="button" onClick={handleSubmit} value="Search" />
    </div>

  );
}
