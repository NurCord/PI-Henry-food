import React, {useState, useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {allDiets, postRecipes} from '../redux/actions/Actions'
import { initialState, validate } from "./Validate";
import {Link, useNavigate} from 'react-router-dom'
import {DivCreateBack, DivCreate, DivCreateDiets, InputC, DivInputsC, DivInputC, DivInputBC, ButtonCreate, ErrorP} from '../style/styleCompnents'
export default function Create() {
  let diets = useSelector(s => s.diets.diets)
  const [input, setInput] = useState({})
  const [error, setError] = useState({})

  let navigate = useNavigate()

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(allDiets())
    setInput(initialState)
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

  function handleOnChangeCheck(id) {
    setInput({
      ...input,
      diets: input.diets?.some(ev=> ev === id) ? input.diets?.filter(ev=> ev !== id) : [...input.diets, id]
    })  
  }

  function handleSubmit(e){
    e.preventDefault();
    if(input.healthScore !== ''){
      input.healthScore = parseInt(input.healthScore)
    }else{
      input.healthScore = 0
    }
    if(input.img === '') input.img = 'https://www.clara.es/medio/2021/12/15/comidas-rapidas_a2766867_1280x1090.jpg';
    dispatch(postRecipes(input))
    setInput(initialState);
    navigate('/home')
  }

  return (
    <DivCreateBack>
      <Link to='/home'>
        <ButtonCreate>Home</ButtonCreate>
      </Link>
      <DivCreate style={{margin: 0, height: 'auto'}}>
        <form onSubmit={handleSubmit} autoComplete='off'>
            <DivInputsC>
                <DivInputC>
                  <label>Name</label>
                  <InputC 
                      key='nameRecipe' 
                      type='text' 
                      name='nameRecipe' 
                      placeholder='Insert name..'
                      value={input.nameRecipe}
                      onChange={(e) => handleOnChange(e)}
                      />
                  <ErrorP>{error.nameRecipe? error.nameRecipe: ''}</ErrorP>
                </DivInputC>

                <DivInputC>
                  <label>Image</label>
                  <InputC 
                      key='img' 
                      type='url' 
                      name='img' 
                      placeholder='Insert Url...'
                      value={input.img}
                      onChange={(e) => handleOnChange(e)}
                      />
                  <ErrorP>{error.img ? error.img: ''}</ErrorP>
                </DivInputC>

                <DivInputC>
                  <label>Summary</label>
                  <InputC 
                      key='summary' 
                      type='text' 
                      name='summary' 
                      placeholder='Insert summary...'
                      value={input.summary}
                      onChange={(e) => handleOnChange(e)}
                      />
                  <ErrorP>{error.summary ? error.summary: ''}</ErrorP>
                </DivInputC>

                <DivInputC>
                  <label>Health score</label>
                  <InputC 
                      key='healthScore' 
                      type='number' 
                      name='healthScore' 
                      placeholder='Insert health score...'
                      value={input.healthScore}
                      onChange={(e) => handleOnChange(e)}
                      />
                  <ErrorP>{error.healthScore ? error.healthScore : ''}</ErrorP>
                </DivInputC>

                <DivInputC>
                  <label>Recipe</label>
                  <InputC 
                      key='recipe' 
                      type='text' 
                      name='recipe' 
                      placeholder='Insert recipe...'
                      value={input.recipe}
                      onChange={(e) => handleOnChange(e)}
                      />
                </DivInputC>
                <DivInputC>
                  <label>Dish type</label>
                  <InputC 
                      key='dishTypes' 
                      type='text' 
                      name='dishTypes' 
                      placeholder='Insert dish type...'
                      value={input.recipe}
                      onChange={(e) => handleOnChange(e)}
                      />
                </DivInputC>
              </DivInputsC>
              <DivCreateDiets>
              {
                diets[0]?.map((e) => 
                  <div key={e.id}>
                    <label>{e.name}</label>
                    <input type='checkbox' key={e.id} value={e.id} onChange={() => handleOnChangeCheck(e.id)}></input>
                  </div>)
              } 
              </DivCreateDiets>
              <DivInputBC type="submit" placeholder='Create'/>
        </form>
      </DivCreate>
    </DivCreateBack>
  )
}
