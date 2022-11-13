import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Navbar from './components/Navbar'
import DeviceManagement from './components/pages/DeviceManagement'
import ControlConfiguration from './components/pages/ControlConfiguration'
import MonitorTracking from './components/pages/MonitorTracking'
import IoT from './components/pages/IoT'
import Meter from './components/pages/Meter'
import Admin from './components/Admin/Admin'
import BillingInfo from './components/pages/BillingInfo'
import BillPayment from './components/pages/BillPayment'

export default function App() {
    let pathName = window.location.pathname
let arr = pathName.toString().split("/");
let currentPath = arr[arr.length-1];
    return (
        <Router>
            {currentPath.length>0 &&<Navbar />}
            <div>
            <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={<LoginPage/>  } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/forget-password" element={<ForgetPasswordPage/>  } />
                    <Route path="/home" element={<HomePage/>  } />
                    <Route path="/device-mgmt" element={<DeviceManagement/>  } />
                    <Route path="/control-config" element={<ControlConfiguration/>  } />
                    <Route path="/monitor-tracking" element={<MonitorTracking/>  } />
                    <Route path="/iot" element={<IoT/>  } />
                    <Route path="/meter" element={<Meter/>  } />
                    <Route path= "/admin" element={<Admin/> } />
                    <Route path="/billing-info" element={<BillingInfo/>} /> 
                    <Route path="/bill-payment" element={<BillPayment/>} />
            </Routes>
                {/* <Footer /> */}
            </div>
        </Router>
    )
}

