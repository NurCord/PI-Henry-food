import * as React from 'react'
import { useDispatch } from 'react-redux'
import { recipeByID } from '../redux/actions/Actions'
import { useNavigate } from "react-router-dom";
import {DivCards, DivImaCards, DivCard, H5, DivCardDiets, ImgCard, HR, ButtonCard} from '../style/styleCompnents'

export default function Cards({ dataApi }) {

  let dispatch = useDispatch()
  let navigate = useNavigate();

  function handleClick(id) {
    dispatch(recipeByID(id))
    navigate("/detail", { replace: true });
  }

  return (
    <DivImaCards>
      <DivCards>
          {
            dataApi?.map(data =>
              <DivCard key={data.id}>
                <div style={{paddingBottom: 4, width: 282}}>
                  <header>{data.title}</header>
                </div>
                <div>
                  <HR></HR>
                  <ImgCard src={data.image} alt='Not found'/>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  paddingRight: 4, 
                  paddingLeft: 4
                }}
                >
                  <div>
                    <h3 style={{margin: 0}}>Diets Types</h3>
                    <DivCardDiets>
                      <H5>vegetarian</H5>
                      {data.diets?.map(d => (
                        <H5 key={d.id}>{d.name}</H5>
                        ))
                      }
                      {
                        data.diet?.map((d, i) => (
                          <H5 key={i}>{d}</H5>
                          ))
                        }
                    </DivCardDiets>
                  </div>
                </div>
                <ButtonCard onClick={() => handleClick(data.id)}>Detail</ButtonCard>
          </DivCard>)
          } 
        </DivCards>
    </DivImaCards>
  );
}
