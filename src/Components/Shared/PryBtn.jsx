import React from 'react'
import "./PryBtn.css"

const PryBtn = ({children, onClick}) => {
  return (
    <button className='pryBtn'>
        {children}
        {onClick}
    </button>
  )
}

export default PryBtn