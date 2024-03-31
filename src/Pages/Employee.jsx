import React from 'react'
import SideBar from '../Components/SideBar'
import Header from '../Components/Header'
import ContentArea from '../Components/Shared/ContentArea'
import DashboardContainer from '../Components/Shared/DashboardContainer'
import PageHeader from '../Components/Shared/PageHeader'
import Card from "../Components/Card"
import "./Employee.css"


const Employee = () => {
  return (
    <>
       <DashboardContainer>
            <SideBar/>


            <ContentArea>
                    <div className="container">
                        <Header/>   
                        <PageHeader/>
                            <div className="card-group">
                                
                            </div>
                    </div>
            


            </ContentArea>

        </DashboardContainer>
   
    </>
  )
}

export default Employee