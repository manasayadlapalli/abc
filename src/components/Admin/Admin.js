import React from 'react'
import Map from './Map'
import '../../styles/device.css'
import {AiFillHome} from 'react-icons/ai'
import {GrUserSettings} from 'react-icons/gr'
import {GoGraph} from 'react-icons/go'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Adminmetrics from './Adminmetrics'
import AdminHome from './AdminHome'

const SideBar = () => {
  return (
    <>
      <div>
        <Link to="/adminhome"> <AiFillHome style={{ fontSize: '32px' }}/> </Link>
      </div>
      <div>
        <Link to="/adminmetrics"> <GoGraph style={{ fontSize: '32px' }}/> <br/> </Link>
      </div>
      <div>
        <Link to="/addclients"> <GrUserSettings style={{ fontSize: '31px' }}/> </Link>
      </div>
    </>
  );
};


export default function Admin() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 2 }}>
          <SideBar />
        </div>
        
          <Switch>
            <Route path="/addclients">
               Admin adds clients here 
            </Route>

            <Route path="/adminmetrics"> <Adminmetrics/></Route>
            <Route path="/adminhome">
              <AdminHome/>
            </Route>
          </Switch>
        
      </div>
    </BrowserRouter>
  );
}

