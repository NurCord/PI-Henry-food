import * as React from 'react'
import { useDispatch } from 'react-redux'
import { recipeByID } from '../../redux/actions/Actions'
import { useNavigate } from "react-router-dom";

export default function Cards({ dataApi }) {

  let dispatch = useDispatch()
  let navigate = useNavigate();

  function handleClick(id) {
    dispatch(recipeByID(id))
    navigate("/detail", { replace: true });
  }

  return (
    <div style={{
      display:'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
      alignContent: 'space-around',
      alignItems: 'center',
      justifyItems: 'center',
      paddingTop: 0 
    }}>
      {
        dataApi?.map(data =>
          <div key={data.id}>
            <div style={{ width: 250, backgroundColor: 'black' }}>
              <header style={{ backgroundColor: "grey" }}>{data.title}</header>
              <button onClick={() => handleClick(data.id)} style={{ textDecoration: "none", color: "black" }}>Detail</button>
              <img src={data.image} style={{ width: "100%", height: 'auto', }} alt='Not found' />
              <div
                style={{
                  backgroundColor: "grey",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}>
                <div style={{ textAlign: "left" }}>
                  <h4 style={{ textAlign: "left", alignSelf: "flex-start" }}>Dishes types</h4>
                  <h5>{data.dishTypes}</h5>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ textAlign: "center", alignSelf: 'center' }}>Diets Types</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', alignSelf: 'flex-start', listStyle: 'none' }}>
                    {data.diets?.map(d => (
                      <li style={{ textAlign: 'left', alignSelf: 'flex-start' }} key={d.id}>{d.name}</li>
                    ))
                    }{
                      data.diet?.map((d, i) => (
                        <li style={{ textAlign: 'left', alignSelf: 'flex-start' }} key={i}>{d}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
