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
import BillingConfirmation from './components/pages/BillingConfirmation'

export default function App() {
    let pathName = window.location.pathname
let arr = pathName.toString().split("/");
let currentPath = arr[arr.length-1];
    return (
        <Router>
            {currentPath.length>0 &&<Navbar />}
            <div>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/device-mgmt" component={ DeviceManagement } />
                    <Route path="/control-config" component={ ControlConfiguration } />
                    <Route path="/monitor-tracking" component={ MonitorTracking } />
                    <Route path="/iot" component={ IoT } />
                    <Route path="/meter" component={ Meter } />
                    <Route path= "/admin" component={ Admin} />
                    <Route path="/billing-info" component={BillingInfo} /> 
                    <Route path="/bill-payment" component={BillPayment} />
                    <Route path="/bill-confirmation" component={BillingConfirmation} />

                {/* <Footer /> */}
            </div>
        </Router>
    )
}

