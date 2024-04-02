import React, { useContext, useEffect } from 'react'
import "./PayrollInformation.css"
import SideBar from '../Components/SideBar'
import DashboardContainer from '../Components/Shared/DashboardContainer'
import ContentArea from '../Components/Shared/ContentArea'
import Header from '../Components/Header'
import PageHeader from '../Components/Shared/PageHeader'
import Card from '../Components/Card'
import PryBtn from '../Components/Shared/PryBtn'
import SecBtn from '../Components/Shared/SecBtn'
import Spinner from "../assets/Half circle.gif"
import Search from '../Components/Search'
import DataTable from '../Components/DataTable'
import HrContext from '../HRContext/HrContext'
import Cash from "../assets/icon (10).png"
import CashRcy from "../assets/icon (11).png"
import CashSent from "../assets/icon (12).png"

const PayrollInformation = () => {

    const {date,time,data,isLoading,showSpinner} = useContext(HrContext)

  
 showSpinner();







  return (
    <DashboardContainer>
        <SideBar/>
        <ContentArea>
            <Header/>
                <div className="container">

                    <PageHeader>
                        <div className="">
                            <h2>Payroll</h2>
                            <p>Dashboard .Payroll . <span className='active'>Payroll Information</span></p>
                        </div>
                        <p>{date} | {time} </p>
                    </PageHeader>


                    {isLoading ? 
                    
                        <div className="spinner">

                            <img src={Spinner}/>
                        </div>
                    
                    
                    
                    : 
                    <>
                    
                    
                    <div className="card-group">

                        <div className="overview-card">
                            <div className="card-head">
                                <img src={Cash}/>
                                <p>No of employee: 150</p>
                            </div>
                                <div className="card-info-1">
                                       <div className="pay-info">
                                            <p>Total Payroll</p>
                                            <h2>#5,000,000.<span>00</span></h2>
                                        </div> 
                                            <div className="btns">

                                                <SecBtn>
                                                    View Schedule
                                                </SecBtn>
                                                <PryBtn>
                                                    Pay Payroll
                                                </PryBtn>
                                            </div>
                                </div>
                        </div>
                        
                        <Card>
                            <div className="wrapper">
                                <div className="card-head">
                                         <img src={CashRcy}/>
                                        <p>No of employee: 1</p>
                                    </div>
                                        <div className="card-info-head">
                                                <div className="pay-info">
                                                    <p>Pending Payment</p>
                                                    <h2>#150,000.<span>00</span></h2>
                                                </div> 
                                            
                                                        <SecBtn>
                                                            View
                                                        </SecBtn>
                                                    
                                        </div>

                            </div>
                        </Card>
                        
                        <Card>
                            <div className="wrapper">
                                <div className="card-head">
                                        <img src={CashSent}/>
                                        <p>No of employee: 145</p>
                                    </div>
                                        <div className="card-info-head">
                                                <div className="pay-info">
                                                    <p>Paid Payroll</p>
                                                    <h2>#4,850,000.<span>00</span></h2>
                                                </div> 
                                                    
                                        </div>

                            </div>
                        </Card>
                        
                    </div>

                    <Search/>
                    <DataTable/>
                    </>
            }
                </div>
          

                    

                    
        </ContentArea>
    </DashboardContainer>
  )
}

export default PayrollInformation