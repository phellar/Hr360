import React from 'react'
import "./ContentArea.css"

const ContentArea = ({children}) => {
  return (
      <div className="content-area">
        {children}
       
    </div>
  )
}

export default ContentArea