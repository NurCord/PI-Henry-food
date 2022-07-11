import * as React from 'react'

export default function Cards({ filterData }) {
  return (
    <div>
      <div
        style={{
          justifyContent: "space-around",
          width: "100%",
          display: "flex",
          flexDirection: 'row',
          backroundColor: "gray",
          marginTop: "10px",
          flexWrap: 'wrap',
        }}
      >
        {                 
          filterData?.map(data =>
            <div style={{ width: 300, height: 150 }} key={data.id}>
              <header style={{ color: "white" }}>{data.title}</header>
              <img src={data.image} style={{ width: "100%", height: "300px" }} alt='Not found' />
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
                <div style={{ textAlign: 'left', backgroundColor: 'blue' }}>
                  <h4 style={{ textAlign: "center", alignSelf: 'center' }}>Diets Types</h4>
                  <ul style={{ backgroundColor: 'red', display: 'flex', flexDirection: 'column', textAlign: 'left', alignSelf: 'flex-start', listStyle: 'none' }}>
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
            </div>)
        }
      </div>
    </div>
  );
}
