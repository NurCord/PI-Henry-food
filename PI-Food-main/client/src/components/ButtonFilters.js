import * as React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {allDiets,allRecipes} from '../redux/actions/Actions'

function ButtonFilters({filter}) {
  let dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(allDiets());
    dispatch(allRecipes());
    
  }, [])
  
  let state = useSelector(s => s.diets.diets)

  function handlerOnChange(i){
    return filter(false, i.target.value)
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
      <div style={{ alignSelf: "center" }}>
        <select style={{ width: "150px" }}>
          <option value='upward' key='upward'>Upward</option>
          <option value='descendant' key='descendant'>descendant</option>
        </select>
      </div>
      {/* <button></button> */}
    </div>
  );
}

export default ButtonFilters;
