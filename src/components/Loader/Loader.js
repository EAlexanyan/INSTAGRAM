import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div className='allLoadingDiv'>
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Loader