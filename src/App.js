import React from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
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
import AdminHome from './components/Admin/AdminHome'

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
                    <Route path ="/adminhome" component ={AdminHome}/>

                {/* <Footer /> */}
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Footer</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}