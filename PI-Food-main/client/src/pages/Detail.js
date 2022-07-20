import React from 'react'
import { useSelector } from 'react-redux'
import { DivDetail, ImgDetail, H5, DetailRight, DivColumns, DivDetailBack, ButHomeDetail} from '../style/styleCompnents'
import {Link} from 'react-router-dom'
export default function Detail() {
  let info = useSelector(s => s.root.recipe)
  const [data, setData] = React.useState(info)

  React.useEffect(() => {
    setData(info)
  }, [info])

  return (
    <DivDetailBack>
      <Link to='/home'>
        <ButHomeDetail>Home</ButHomeDetail>
      </Link>
        {
          data.id ?
            <DivDetail>
                  <h2 style={{fontSize: 'xx-large'}}>{data.title}</h2>
            <DivColumns>
              <DetailRight>
                  <h5>Summary: {data.summary}</h5>
                  <h5>Healt Score: {data.healthScore}</h5>
              </DetailRight>
              <DetailRight>
                <DivColumns>
                  <ImgDetail src={data.image} alt='Not found' />
                  <div>
                  <DetailRight>
                    <h4>Diets Types</h4>
                    <div>
                      {data.diets?.map(d => (
                        <H5 key={d.id}>{d.name}</H5>
                      ))
                      }{
                        data.diet?.map((d, i) => (
                          <H5 key={i}>{d}</H5>
                        ))
                      }
                    </div>
                  </DetailRight>
                    <h4>Dishe type: {data.dishTypes}</h4>
                  </div>
                </DivColumns>
              </DetailRight>
            </DivColumns>
                  <h5>Recipe: {data.recipe}</h5>
            </DivDetail>
            : ''
        }
    </DivDetailBack>
  )
}
