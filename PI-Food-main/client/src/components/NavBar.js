import * as React from "react";
import { useDispatch } from "react-redux";
import { allRecipesByName } from "../redux/actions/Actions";
import {NavLink} from 'react-router-dom'
import {DivNav, InputS, InputB, Span, ImgNav} from '../style/styleCompnents'
import image from '../style/Logo.png'
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
    <DivNav>
      <div>
        <ImgNav src={image} alt='Not Found'/>
      </div>
      <div>
        <InputS
          type="text"
          placeholder="Search recipe..."
          value={nameRecipe}
          onChange={e => setNameRecipe(e.target.value)}
        />
        <InputB type="button" onClick={handleSubmit} value="Search" />
      </div>
      <div>
        <NavLink to='/diets' style={{textDecoration: 'none'}}><Span>Diets</Span></NavLink>
      </div>
      <div>
        <NavLink to='/create' style={{textDecoration: 'none'}}><Span>Create</Span></NavLink>
      </div>
    </DivNav>

  );
}
