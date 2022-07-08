import React from 'react'
import imag from '../style/pexels-3.jpg'
import '../style/image.css'

export default function Image() {
  return (
    <div className='container'><img src={imag} alt='not found' className='image'></img></div>
  )
}
