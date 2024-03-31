import React from 'react'
import Settings from "../assets/icon (2).png"
import Msg from "../assets/icon (3).png"
import Notification from "../assets/icon (4).png"
import UserImg from "../assets/image 111.png"
import "./Header.css"

const Header = () => {
 


  return (
    <header className='header'>
        <div className="container">
                 <div className="dashboard-header">
                            <div className="">
                            
                                <p>Welcome back,<strong>Barbara</strong></p>
                            </div>

                            <div className="short-cut">
                                <img src={Settings} alt="" />
                                <img src={Msg} alt="" />
                                <img src={Notification} alt="" />
                                <img src={UserImg} alt="user" className='user-pp'/>
                                {/* <div className="user-profile"></div> */}
                            </div>

                  </div>
        </div>

    </header>

    
  )
}

export default Header