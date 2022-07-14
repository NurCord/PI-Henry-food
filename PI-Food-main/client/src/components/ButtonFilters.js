import * as React from "react";
import {useSelector} from 'react-redux'



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
    <div
      style={{
        width: "100%",
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "gray",
        height: "35px",
      }}
    >
      <div style={{ alignSelf: "center" }}>
        <select 
        onChange={(i) => handlerOnChange(i)}
        label="test" style={{ width: "150px" }}>
        <option value='selectdiets'>Select Diets</option>
        {
          state[0]?.map(e=> <option key={e.id} value={e.name}>{e.name}</option>)
        }
        </select>
      </div>
       <div 
        onChange={(i) => handlerOnChangeUpDown(i)}
        style={{ alignSelf: "center" }}>
        <select style={{ width: "150px" }}>
          <option value='order' key='order'>Order</option>
          <option value='upward' key='upward'>Az</option>
          <option value='descendant' key='descendant'>Za</option>
        </select>
      </div>
      <div 
        onChange={(i) => handlerOnChangeUpDownHS(i)}
        style={{ alignSelf: "center" }}>
        <select style={{ width: "150px" }}>
          <option value='order' key='order'>Order</option>
          <option value='upHS' key='upHS'>Highly healthy</option>
          <option value='downHS' key='downHS'>Unhealthy</option>
        </select>
      </div> 
    </div>
  );
}

export default ButtonFilters;
