import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo Container.png"
import Dashicon from "../assets/dashboard-square-01.png"
import UserGroup from "../assets/user-group (1).png"
import ArrowDown from "../assets/arrow-down-01-round.png"
import Calender from "../assets/calendar-01.png"
import Cash from "../assets/cash-01.png"
import Clock from "../assets/icon (8).png"
import Umbrella from "../assets/icon (9).png"
import Money from "../assets/icon (10).png"
import LogOut from "../assets/logout-03.png"
import UserAdd from "../assets/user-add-02.png"
import Chart from "../assets/chart-evaluation.png"
import Book from "../assets/book-02.png"
import Circle from "../assets/information-circle.png"
import File from "../assets/file-01.png"
import HrContext from '../HRContext/HrContext'



import "./SideBar.css"

const SideBar = () => {
  const {showMenu1,showMenu2,showMenu3,showMenu4,openMenu1,openMenu2,openMenu3,openMenu4} = useContext(HrContext)

    
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

                    <li><Link to="" onClick={showMenu2}> {<img src={UserAdd}/>}Recruitement </Link></li>
                        {openMenu2 && <>
                         <li><Link to="/">Attendance</Link></li>
                         <li><Link to="/">Attendance</Link></li>
                         <li><Link to="/">Attendance</Link></li>
                        </>
                      }

                    <li><Link to="" onClick={showMenu3}>{<img src={Chart}/>}Performance</Link></li>
                        {openMenu3 && <>
                         <li><Link to="">Attendance</Link></li>
                         <li><Link to="">Attendance</Link></li>
                         <li><Link to="">Attendance</Link></li>
                        </>
                      }
                      <li><Link to="" onClick={showMenu4}>{<img src={Cash}/>}Payroll</Link></li>
                          {openMenu4 && <>
                          <li><Link to="/PayrollInformation">Payroll information</Link></li>
                          <li><Link to="">Benefits overview</Link></li>
                          <li><Link to="">Compensation Analysis</Link></li>
                          </>
                        }

                    <li><Link to="/">{<img src={Book}/>}Training and development</Link></li>
                    <li><Link to="/">{<img src={Calender}/>}Schedule</Link></li>
                    <li><Link to="/">{<img src={File}/>}Report and analytics</Link></li>
                    <li><Link to="/">{<img src={Circle}/>}Help</Link></li>
                    <li><Link to="/">{<img src={LogOut}/>}Log out</Link></li>
                </ul>
        </div>

    </>
  )
}

export default SideBar