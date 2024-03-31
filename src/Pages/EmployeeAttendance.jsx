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
import Chair from "../assets/chair.png"
import HrContext from '../HRContext/HrContext'

const EmployeeAttendance = () => {
    const {showSpinner,isLoading,date,time} = useContext(HrContext)

  

 

  useEffect(()=>{

        showSpinner();
  },[])

 
  return (
    <DashboardContainer>
      <SideBar/>
          <ContentArea>
              <Header/>
                  <div className="container">
                      <PageHeader>
                            <div className="">
                               <h1>Employee  Attendance</h1>
                               <p>Dashboard . Employee . Attendance</p>
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
                                        <h2>150</h2> 
                                        
                                    </div>
                                </Card>
                                        <Card>
                                            <div className="card-info">
                                                <div className="card-header">
                                                <img src={Chair}/>
                                                    <p>10% last month</p>
                                                </div>
                                                <p> Present workforce</p>
                                                <h2>125</h2>
                                                
                                            </div>
                                        </Card>
                                            <Card>
                                                <div className="card-info">
                                                        <div className="card-header">
                                                        <img src={Cog}/>
                                                            <p>10% last month</p>
                                                        </div>
                                                    <p>Absents</p>
                                                    <h2>15</h2>
                                                </div>
                                            </Card>
                                                    <Card>
                                                        <div className="card-info">
                                                            <div className="card-header">
                                                            <img src={Cog}/>
                                                                <p>10% last month</p>
                                                            </div>
                                                            <p>Late arrivals</p>
                                                        <h2>5</h2>
                                                            
                                                        </div>
                                                    </Card>
                                                        <Card>
                                                            <div className="card-info">
                                                                <div className="card-header">
                                                                <img src={Cog}/>
                                                                    <p>10% last month</p>
                                                                </div>
                                                                <p>On leave</p>
                                                            <h2>5</h2>
                                                                
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