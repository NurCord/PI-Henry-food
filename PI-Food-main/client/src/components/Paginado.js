import React, { useState } from 'react'
import ButtonFilters from './ButtonFilters';
import Cards from './Cards'
import { allRecipes} from "../redux/actions/Actions";
import { useDispatch, useSelector } from 'react-redux';
import { SortArrayUpHS, SortArrayDownHS, SortArrayUp, SortArrayDown} from './Functions'
import {Footer, ButtonFooter, DivButtons} from '../style/styleCompnents'
import '../style/animations.css'
const itemsPerPage = 9;
export default function Paginado() {
  let stateData = useSelector(s => s.root.recipes)

  const [dataApi, setDataApi] = useState(stateData)
  const [items, setItems] = useState()
  const [current, setCurrent] = useState(0)

  const dispatch = useDispatch()

  React.useEffect(() => {
    setDataApi(stateData)
    paginadoConFiltros(stateData)
    console.log('hola qcy')
  }, [stateData])

  React.useEffect(() => {
    paginadoConFiltros(dataApi)
  }, [dataApi])

  function paginadoConFiltros(array, firstIndex = false) {
    if (firstIndex) {
      setItems([...array].splice(firstIndex, itemsPerPage))
    } else {
      setItems([...array].splice(0, itemsPerPage))
    }
  }

  function nextHandler() {
    const allElements = dataApi.length;
    const nextPage = current + 1;
    const firstIndex = nextPage * itemsPerPage;

    if (firstIndex === allElements) return;
    paginadoConFiltros(dataApi, firstIndex)
    setCurrent(nextPage);
  }

  function prevHandler() {
    const prevPage = current - 1;
    if (prevPage < 0) return;
    const firstIndex = prevPage * itemsPerPage;
    paginadoConFiltros(dataApi, firstIndex)
    setCurrent(prevPage);
  }

  function filtroSelectYSearch(name) {
      if (name === 'selectdiets') {
        dispatch(allRecipes());
      } else {
        let testt = [];
        for (let index = 0; index < stateData.length; index++) {
          if (stateData[index]['diet']?.includes(name)) {
            testt.push(stateData[index])
          }
          else if (stateData[index]['diets']?.some(j => j.name === name) === true) {
            testt.push(stateData[index])
          }
        }
        setDataApi(testt)
      }
    }
    
    function filterByOrder(order) {
        if( order === 'order'){
          dispatch(allRecipes())
        } else if(order === 'upward') {
            let orderUp = stateData.sort(SortArrayUp);
            setCurrent(0)
            paginadoConFiltros(orderUp)
        } else {
            let orderDown = stateData.sort(SortArrayDown)
            setCurrent(0)
            paginadoConFiltros(orderDown)
        }
    }

    function OrderbyHealthScore(order) {
        if( order === 'order'){
          dispatch(allRecipes())
        } else if (order === 'downHS') {
            let orderUp = stateData.sort(SortArrayUpHS);
            setCurrent(0)
            paginadoConFiltros(orderUp)
        } else {
            let orderDown = stateData.sort(SortArrayDownHS)
            setCurrent(0)
            paginadoConFiltros(orderDown)
        }
    } 

  return (
    <div>
      <div>
        <ButtonFilters
          stateData={stateData}
          filter={(name) => filtroSelectYSearch(name)}
          filterByOrder={(name) => filterByOrder(name)}
          OrderbyHealthScore={(name) => OrderbyHealthScore(name)}
        />
      </div>
      <div>
        <Cards dataApi={items} />
      </div>
      <Footer>
        <DivButtons>
          <ButtonFooter onClick={prevHandler}><span>PrevPage</span></ButtonFooter>
          <ButtonFooter onClick={nextHandler}><span>NextPage</span></ButtonFooter>
        </DivButtons>
      </Footer>
    </div>
  )
}
