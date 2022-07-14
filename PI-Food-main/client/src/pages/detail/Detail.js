import React from 'react'
import { useSelector } from 'react-redux'

export default function Detail() {
  let info = useSelector(s => s.root.recipe)
  const [data, setData] = React.useState(info)

  React.useEffect(() => {
    setData(info)
  }, [info])
 
  return (
    <div>
      <div style={{backgroundColor: 'grey'}}>
        {
          data.id ?
            <div>
              <div>
                <h2>{data.title}</h2>
                <img src={data.image} alt='Not found' />
              </div>
              <div>
                <h4>Dishe type</h4>
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
              <div>
                <h5>{data.summary}</h5>
                <h5>{data.healthScore}</h5>
                <h5>{data.recipe}</h5>
              </div>
            </div>
            : ''
        }
      </div>
    </div>
  )
}
