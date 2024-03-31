import React from 'react'
import "./Dashboard.css"
import DashboardContainer from '../Components/Shared/DashboardContainer'
import ContentArea from '../Components/Shared/ContentArea'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'
import PageHeader from '../Components/Shared/PageHeader'



const Dashboard = () => {
          
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();


  return (
    <>
            <DashboardContainer>
                <SideBar/>

                    <ContentArea>
                            <div className="container">
                                <Header/>
                                <PageHeader>
                                        <h1>dashboard</h1>
                                        <p>{date} | {time}</p>
                                </PageHeader>
                        </div>

                    </ContentArea>

            </DashboardContainer>

    </>
 
      

  )
}

export default Dashboard