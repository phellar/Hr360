import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo Container.png"
import Dashicon from "../assets/dashboard-square-01.png"
import UserGroup from "../assets/user-group.png"

import "./SideBar.css"

const SideBar = () => {

    const [openMenu1, setOpenMenu1] = useState(false)
    const [openMenu2, setOpenMenu2] = useState(false)
    const [openMenu3, setOpenMenu3] = useState(false)
    const [openMenu4, setOpenMenu4] = useState(false)

    const showMenu1 = ()=>{
      setOpenMenu1(!openMenu1);
    }
    const showMenu2 = ()=>{
      setOpenMenu2(!openMenu2);
     
    }
    const showMenu3 = ()=>{
      setOpenMenu3(!openMenu3);
    }
    const showMenu4 = ()=>{
      setOpenMenu4(!openMenu4);
    }
    
  return (
    <>
        <div className="side-bar">
            {/* <div className="logo"></div> */}
            <img src={Logo} alt="HR.360-logo" className='logo' />
                <ul> 
                    <li>
                      <Link to="/">
                     
                        {<img src={Dashicon}/>}
                        Dashboard
                        </Link>
                    </li>

                    <li><Link to="" onClick={showMenu1}> {<img src={UserGroup}/>}Employee</Link></li>
                        {openMenu1 && <>
                         <li><Link to="/">Employee directory</Link></li>
                         <li><Link to="/EmployeeAttendance">Attendance</Link></li>
                         <li><Link to="/">Leave requests</Link></li>
                         <li><Link to="/">Absent Trends</Link></li>
                        </>
                      }

                    <li><Link to="" onClick={showMenu2}>Recruitement</Link></li>
                        {openMenu2 && <>
                         <li><Link to="/">Attendance</Link></li>
                         <li><Link to="/">Attendance</Link></li>
                         <li><Link to="/">Attendance</Link></li>
                        </>
                      }

                    <li><Link to="" onClick={showMenu3}>Performance</Link></li>
                        {openMenu3 && <>
                         <li><Link to="">Attendance</Link></li>
                         <li><Link to="">Attendance</Link></li>
                         <li><Link to="">Attendance</Link></li>
                        </>
                      }
                      <li><Link to="" onClick={showMenu4}>Payroll</Link></li>
                          {openMenu4 && <>
                          <li><Link to="/PayrollInformation">Payroll information</Link></li>
                          <li><Link to="">Benefits overview</Link></li>
                          <li><Link to="">Compensation Analysis</Link></li>
                          </>
                        }

                    <li><Link to="/">Training and development</Link></li>
                    <li><Link to="/">Schedule</Link></li>
                    <li><Link to="/">Report and analytics</Link></li>
                    <li><Link to="/">Help</Link></li>
                    <li><Link to="/">Log out</Link></li>
                </ul>
        </div>

    </>
  )
}

export default SideBar