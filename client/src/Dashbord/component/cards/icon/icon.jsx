import React from 'react'
import './icon.css'

function Icon({url}) {
  return (
    <div className='icon'>
    <img src={url} alt="" />
    </div>
  )
}

export default Icon