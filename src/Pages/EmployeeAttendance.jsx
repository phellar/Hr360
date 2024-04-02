import React, { useEffect, useState,useContext, createContext } from 'react'
import './EmployeeAttendance.css'
import Header from '../Components/Header'
import DashboardContainer from '../Components/Shared/DashboardContainer'
import SideBar from '../Components/SideBar'
import ContentArea from '../Components/Shared/ContentArea'
import PageHeader from '../Components/Shared/PageHeader'
import Card from '../Components/Card'
import Search from '../Components/Search'
import Spinner from "../assets/Half circle.gif"
import DataTable from '../Components/DataTable'
import Bag from "../assets/bag.png"
import Cog from "../assets/cog.png"
import Clock from "../assets/icon (8).png"
import Chair from "../assets/chair.png"
import Umbrella from "../assets/icon (9).png"
import HrContext from '../HRContext/HrContext'

const EmployeeAttendance = () => {
    const {showSpinner,isLoading,date,time} = useContext(HrContext)

  

 

        showSpinner();


 
  return (
    <DashboardContainer>
      <SideBar/>
          <ContentArea>
              <Header/>
                  <div className="container">
                      <PageHeader>
                            <div className="nav">
                               <h2>Employee  Attendance</h2>
                               <p>Dashboard . Employee . <span className='active'>Attendance</span></p>
                            </div>
                          <p>{date} | {time}</p>
                      </PageHeader>


                      {isLoading ? <div className="spinner">

                        <img src={Spinner} alt='spinner' className='spin'/> 
                        </div>
                        : 
                        <div className="">
                            <div className="card-group">
                                <Card>
                                    <div className="card-info">
                                            <div className="card-header">
                                                <img src={Bag}/>
                                                <p>10% last month</p>
                                            </div>
                                        <p>Total workforce</p>
                                        <h2><strong>150</strong></h2> 
                                        
                                    </div>
                                </Card>
                                        <Card>
                                            <div className="card-info">
                                                <div className="card-header">
                                                <img src={Chair}/>
                                                    <p>10% last month</p>
                                                </div>
                                                <p> Present workforce</p>
                                                <h2><strong>125</strong></h2>
                                                
                                            </div>
                                        </Card>
                                            <Card>
                                                <div className="card-info">
                                                        <div className="card-header">
                                                        <img src={Cog}/>
                                                            <p>10% last month</p>
                                                        </div>
                                                    <p>Absents</p>
                                                    <h2><strong>15</strong></h2>
                                                </div>
                                            </Card>
                                                    <Card>
                                                        <div className="card-info">
                                                            <div className="card-header">
                                                            <img src={Clock}/>
                                                                <p>10% last month</p>
                                                            </div>
                                                            <p>Late arrivals</p>
                                                        <h2><strong>5</strong></h2>
                                                            
                                                        </div>
                                                    </Card>
                                                        <Card>
                                                            <div className="card-info">
                                                                <div className="card-header">
                                                                <img src={Umbrella}/>
                                                                    <p>10% last month</p>
                                                                </div>
                                                                <p>On leave</p>
                                                            <h2><strong>5</strong></h2>
                                                                
                                                            </div>
                                                        </Card>                    
                                                                          
                            </div>

                          <Search/>
                          <DataTable/>
                    </div>
                }
                        
                  </div>
          </ContentArea>
    </DashboardContainer>
  )
}

export default EmployeeAttendance