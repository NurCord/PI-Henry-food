import React, {useState, useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {allDiets, postRecipes, allRecipes} from '../redux/actions/Actions'
import {Link, useNavigate} from 'react-router-dom'
import {DivCreateBack, DivCreate, DivCreateDiets, InputC, DivInputsC, DivInputC, DivInputBC, ButtonCreate, ErrorP} from '../style/styleCompnents'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  nameRecipe: yup.string().max(100).strict().required(),
  img: yup.string().url().required(),
  summary: yup.string().required(),
  healthScore: yup.number().min(0).max(100).required(),
  recipe: yup.string().required(),
  dishTypes: yup.string().required().max(20),
})

export default function Create() {
  let dietsApi = useSelector(s => s.diets.diets)

  const [diets, setDiets] = useState([])

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  })

  let navigate = useNavigate()

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(allDiets())
  }, []) 

  function handleOnChangeCheck(id) {
    if(diets.some(ev=> ev === id)){
      setDiets(diets.filter(ev=> ev !== id))
    }else{
      setDiets([...diets, id])
    }
  }

  function onSubmit(data){
    data.diets = diets
    dispatch(postRecipes(data))
    dispatch(allRecipes())
    navigate('/home') 
  } 

  return (
    <DivCreateBack>
      <Link to='/home'>
        <ButtonCreate>Home</ButtonCreate>
      </Link>
      <DivCreate style={{margin: 0, height: 'auto'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <DivInputsC>
                <DivInputC>
                  <label>Name</label>
                  <InputC 
                      key='nameRecipe' 
                      type='text' 
                      name='nameRecipe' 
                      placeholder='Insert name..'
                      {...register("nameRecipe")} 
                      />
                  {errors.nameRecipe && <ErrorP>The name is required</ErrorP>}             
                </DivInputC>

                <DivInputC>
                  <label>Image</label>
                  <InputC 
                      key='img' 
                      type='text' 
                      name='img' 
                      placeholder='Insert image...'
                      {...register("img")} 
                      />
                  {errors.img && <ErrorP>Image is required</ErrorP>}                  
                </DivInputC>

                <DivInputC>
                  <label>Summary</label>
                  <InputC 
                      key='summary' 
                      type='text' 
                      name='summary' 
                      placeholder='Insert summary...'
                      {...register("summary")}
                      />
                  {errors.summary && <ErrorP>The summary is required</ErrorP>}                    
                </DivInputC>

                <DivInputC>
                  <label>Health score</label>
                  <InputC 
                      key='healthScore' 
                      type='number' 
                      name='healthScore' 
                      placeholder='Insert health score...'
                      {...register("healthScore")}
                      />
                  {errors.healthScore && <ErrorP>Health score must be between 0 and 100</ErrorP>}                 
                </DivInputC>

                <DivInputC>
                  <label>Recipe</label>
                  <InputC 
                      key='recipe' 
                      type='text' 
                      name='recipe' 
                      placeholder='Insert recipe...'
                      {...register("recipe")}
                      />
                    {errors.recipe && <p>The summary is required</p>}    
                </DivInputC>

                <DivInputC>
                  <label>Dish type</label>
                  <InputC 
                      key='dishTypes' 
                      type='text' 
                      name='dishTypes' 
                      placeholder='Insert dish type...'
                      {...register("dishTypes")}
                      />
                  {errors.dishTypes && <p>The dish type is required</p>} 
                </DivInputC>

              </DivInputsC>
                <DivCreateDiets>
                {
                  dietsApi[0]?.map((e) => 
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
