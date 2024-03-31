import React, { useContext } from 'react'
import HrContext from '../HRContext/HrContext'
import "./DataTable.css"
import PageHeader from './Shared/PageHeader'
import TableHead from './Shared/TableHead'

const DataTable = () => {

  const{data,currentMonth,currentDay} =useContext(HrContext)


  return (
    <div className='data-section'>
                
               <div className="head">
                  
                <p>Date</p>
                <p>Name</p>
                <p>Role</p>
                <p>Employment Type</p>
                <p>Status</p>
                <p>Check In</p>
                <p>Check Out</p>
                <p>Over Time</p>
                  
              </div>
      {data.map((item,id)=>(
        <>

          <div className="data-info">

                <div className="employee-info">
                    {/* <ul>
                        <li>{currentDay}/{currentMonth}</li>
                        <li><img src={item.Avatar}/> {item.name}</li>
                        <li>{item.role}</li>
                        <li className='emp'>{item.employmentType}</li>
                        <li>{item.Status}</li>
                        <li>{item.CheckIn}</li>
                        <li>{item.CheckOut}</li>
                        <li>{item.OverTime}</li>
                    </ul>
                     */}
                    <div className="list">
                    {currentDay}/{currentMonth}
                    </div>
                    <div className="list">
                    <img src={item.Avatar}/> {item.name}
                    </div>
                    <div className="list">
                    {item.role}
                    </div>
                    <div className="list">
                    {item.employmentType}
                    </div>
                    <div className="list">
                    {item.Status}
                    </div>
                    <div className="list">
                    {item.CheckIn}
                    </div>
                    <div className="list">
                    {item.CheckOut}
                    </div>
                    <div className="list">
                    {item.OverTime}
                    </div>

                </div>
          </div>
        </>
        
        
      ))}
    </div>
  )
}

export default DataTable