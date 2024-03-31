import { useState } from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { HrContextProvider } from './HRContext/HrContext';
import Dashboard from './Pages/Dashboard'
import Employee from './Pages/Employee'
import EmployeeAttendance from './Pages/EmployeeAttendance';
import PayrollInformation from './Pages/PayrollInformation';
import Card from "./Components/Card"

import './App.css'

function App() {
  

  return (
    <HrContextProvider>
        <Router>
            <Routes>
                <Route exact path='/' element={<Dashboard/>} />
                <Route path= "/Employee" element={<Employee/>} />
                <Route path= "/PayrollInformation" element={<PayrollInformation/>} />
                <Route path= "/EmployeeAttendance" element={<EmployeeAttendance/>} />
            </Routes>
          
          
        </Router>
      </HrContextProvider>
  )
}

export default App
