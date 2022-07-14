import React, {useState, useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {allDiets, postRecipes} from '../redux/actions/Actions'
import { initialState, validate } from "./Validate";

export default function Create() {
  let diets = useSelector(s => s.diets.diets)
  const [input, setInput] = useState({})
  const [error, setError] = useState({})

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(allDiets())
  }, []) 
  
  function handleOnChange(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    let error = validate({...input, [e.target.name]: e.target.value})
    setError(error)
    return error
  }

  function handleOnChangeCheck(e) {
    console.log(input.diets);
    let name = e.target.value;
    setInput({
      ...input,
      diets: input.diets?.some(ev=> ev === name) ? input.diets?.filter(ev=> ev !== name) : [...input.diets, name]
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(postRecipes(input))
    setInput(initialState);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input 
                  key='nameRecipe' 
                  type='text' 
                  name='nameRecipe' 
                  placeholder='Name..'
                  value={input.nameRecipe}
                  onChange={(e) => handleOnChange(e)}
                  />
              {
                error.nameRecipe??<p>{error.nameRecipe}</p>
              }
            </div>

            <div>
              <label>Image:</label>
              <input 
                  key='img' 
                  type='url' 
                  name='img' 
                  placeholder='url...'
                  value={input.img}
                  onChange={(e) => handleOnChange(e)}
                  />
              {
                error.img??<p>{error.img}</p>
              }
            </div>

            <div>
              <label>Summary:</label>
              <input 
                  key='summary' 
                  type='text' 
                  name='summary' 
                  placeholder='Summary...'
                  value={input.summary}
                  onChange={(e) => handleOnChange(e)}
                  />
              {
                error.summary??<p>{error.summary}</p>
              }
            </div>

            <div>
              <label>Health score:</label>
              <input 
                  key='healthScore' 
                  type='number' 
                  name='healthScore' 
                  placeholder='Health score...'
                  value={input.healthScore}
                  onChange={(e) => handleOnChange(e)}
                  />
              {
                error.healthScore??<p>{error.healthScore}</p>
              }
            </div>

            <div>
              <label>Recipe:</label>
              <input 
                  key='recipe' 
                  type='text' 
                  name='recipe' 
                  placeholder='Recipe...'
                  value={input.recipe}
                  onChange={(e) => handleOnChange(e)}
                  />
            </div>
            {
              diets[0]?.map((e) => 
              <div key={e.id}>
                <label>{e.name}</label>
                <input type='checkbox' key={e.id} value={e.name} onChange={(e) => handleOnChangeCheck(e)}></input>
              </div>)
            } 
            {
              input.nameRecipe && input.summary && <input type="submit" placeholder='Create'/>
            }
      </form>
    </div>
  )
}
