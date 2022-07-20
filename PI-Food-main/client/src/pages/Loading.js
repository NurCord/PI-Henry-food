import React from 'react'
import { Link } from 'react-router-dom'
import {DivLoadingBack, ImageLoading, BoxLoading, DivLoadingBox} from '../style/styleCompnents'
import imag from '../style/pexels-3.jpg'

export default function Loading() {
    return (
      <DivLoadingBack>
        <DivLoadingBox>
          <BoxLoading/>
        </DivLoadingBox>
        <Link to='/home'>
            <ImageLoading src={imag} alt='not found'></ImageLoading>
         </Link>
      </DivLoadingBack>
    )
}
