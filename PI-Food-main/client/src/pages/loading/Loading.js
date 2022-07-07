import React from 'react'
import {suma} from '../../redux/actions/Actions'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

export default function Loading() {
    let dispatch = useDispatch()
    let state = useSelector(s => s)
  
    function onHandlerClick(){
      dispatch(suma())
    }
  
    return (
      <div>
        <h1>Iniciar</h1>
            <Link to='/home'><button>x</button></Link>
            <button onClick={()=>onHandlerClick()}>Suma</button>
        <h3>{state.count}</h3>
      </div>
    )
}
