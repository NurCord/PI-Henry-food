import React from 'react'
import { Link } from 'react-router-dom'

export default function Loading() {
    return (
      <div>
        <h1>Iniciar</h1>
            <Link to='/home'><button>x</button></Link>
      </div>
    )
}
