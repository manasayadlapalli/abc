import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from 'react-router-dom'
import {LandingPage} from './components/pages/LandingPage'
import {LoginPage} from './components/pages/LoginPage'
import {RegisterPage} from './components/pages/RegisterPage'
import {ForgetPasswordPage} from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import {Navbar} from './components/Navbar'
import {DeviceManagement} from './components/pages/DeviceManagement'
import {ControlConfiguration} from './components/pages/ControlConfiguration'
import {MonitorTracking} from './components/pages/MonitorTracking'
import {IoT} from './components/pages/IoT'
import {Meter} from './components/pages/Meter'
import {Admin} from './components/Admin/Admin'
import {BillingInfo} from './components/pages/BillingInfo'
import {BillPayment} from './components/pages/BillPayment'
import {AdminHome} from './components/Admin/AdminHome';
import {Adminmetrics} from './components/Admin/Adminmetrics.js';
import New_Login from './components/pages/New_Login';
import UserTable from './components/Admin/UserTable';

function App() {
    let pathName = window.location.pathname
let arr = pathName.toString().split("/");
let currentPath = arr[arr.length-1];
    return (
        <>
            <div>
            {currentPath.length>0 &&<Navbar />}
            <Routes>
                    <Route exact path="/" element={<LandingPage/>} />
                    <Route path="login" element={<LoginPage/>} />
                    <Route path="new-login" element={<New_Login/>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/forget-password" element={<ForgetPasswordPage/>} />
                    <Route path="/home" element={<HomePage/>}/>
                    <Route path="/device-mgmt" element={<DeviceManagement/>  } />
                    <Route path="/control-config" element={<ControlConfiguration/>  } />
                    <Route path="/monitor-tracking" element={<MonitorTracking/>  } />
                    <Route path="/iot" element={<IoT/>  }/>
                    <Route path="/meter" element={<Meter/>  } />
                    <Route path= "/admin" element={<Admin/> } />
                    <Route path="/billing-info" element={<BillingInfo/>} /> 
                    <Route path="/bill-payment" element={<BillPayment/>} />
                    <Route path="/addclients" element={<UserTable/>}/>
                    <Route path="/adminmetrics" element={<Adminmetrics/>}/>
                    <Route path="/adminhome" element={<AdminHome/>}/> 

            </Routes>
                {/* <Footer /> */}
            </div>

        </>
    )
}

export default App;

// const Footer = () => {
//     return (
//         <p className="text-center" style={ FooterStyle }>Footer</p>
//     )
// }

// const FooterStyle = {
//     background: "#222",
//     fontSize: ".8rem",
//     color: "#fff",
//     position: "absolute",
//     bottom: 0,
//     padding: "1rem",
//     margin: 0,
//     width: "100%",
//     opacity: ".5"
// }