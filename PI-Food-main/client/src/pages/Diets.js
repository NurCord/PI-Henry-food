import React from 'react'
import { useSelector } from 'react-redux'
import {DivDietsBack, DivDiet, DivIndDiet, H3Diet, DivFood} from '../style/styleCompnents'
import {Link} from 'react-router-dom'
export default function Diets() {
    const state = useSelector(s => s.diets.diets)
    return (
        <div>
            <DivDietsBack>
                <DivDiet>
                        {
                            state[0]?.map(e=> 
                            <DivIndDiet style={{margin: 0}} key={e.id}>
                                <div>
                                    <H3Diet>{e.name?.toUpperCase()}</H3Diet>
                                </div>
                                <div>
                                    <p>{e.definition}</p>
                                </div>
                            </DivIndDiet>)
                        }
                        <Link to='/home'>
                            <DivFood/>
                        </Link>
                        <h3>Click Icon</h3>
                </DivDiet>
            </DivDietsBack>
        </div>
    )
}
