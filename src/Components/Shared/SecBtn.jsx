import React, { Children } from 'react'
import "./SecBtn.css"

const SecBtn = ({children,onClick}) => {
  return (
    <button className='secBtn'>
        {children}
        {onClick}
    </button>
  )
}

export default SecBtn