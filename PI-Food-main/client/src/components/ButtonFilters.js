import * as React from "react";
import {useSelector} from 'react-redux'
import {DivFiltersBack, DivFilters, SelectFilters} from '../style/styleCompnents'

function ButtonFilters({filter, filterByOrder, OrderbyHealthScore}) {
  let state = useSelector(s => s.diets.diets)

  function handlerOnChange(i){
    filter(i.target.value)
  } 
  
  function handlerOnChangeUpDown(i){
    filterByOrder(i.target.value)
  } 

  function handlerOnChangeUpDownHS(i){
    OrderbyHealthScore(i.target.value)
  } 

  return (
    <DivFiltersBack>
      <DivFilters>
          <SelectFilters 
          onChange={(i) => handlerOnChange(i)}
          label="test">
          <option value='selectdiets'>Select Diets</option>
          {
            state[0]?.map(e=> <option key={e.id} value={e.name}>{e.name.replace(/(^\w{1})/g, letra => letra.toUpperCase())}</option>)
          }
          </SelectFilters>
          <SelectFilters onChange={(i) => handlerOnChangeUpDown(i)}>
            <option value='order' key='order'>Order</option>
            <option value='upward' key='upward'>A-z</option>
            <option value='descendant' key='descendant'>Z-a</option>
          </SelectFilters>
          <SelectFilters onChange={(i) => handlerOnChangeUpDownHS(i)}>
            <option value='order' key='order'>Order</option>
            <option value='upHS' key='upHS'>Highly healthy</option>
            <option value='downHS' key='downHS'>Unhealthy</option>
          </SelectFilters>
      </DivFilters>
    </DivFiltersBack>
  );
}

export default ButtonFilters;
