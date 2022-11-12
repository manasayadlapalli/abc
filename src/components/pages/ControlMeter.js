import React from 'react'
import '../../styles/Buttons.css'
import Table from 'react-bootstrap/Table'
import energy from '../../assets/images/energy-meter-icon.png'
import water from '../../assets/images/water-meter-icon.png'
import ToggleSwitch from '../ToggleSwitch'
import settings from '../../assets/images/settings-icon.png'
import Box from '@mui/material/Box'
import { useState } from 'react'

function ControlMeter() {
  const [meter, setMeter] = useState('Electricity');
  return (
    
    <div className="table-wrapper">
      <br></br>
      <div style={{display:'flex', justifyContent: "center"}}>
      <button style={{fontSize:"15px" ,width:"100px" }} onClick={(e) => setMeter('Electricity')}>
        Electricity Meter
      </button>
      <button style={{fontSize:"15px" ,width:"100px" }} onClick={(e) => setMeter('Water')}>
        Water Meter
      </button>
      </div>
      <br></br>
      <Box textAlign="center" bgcolor="#D3D3D3" border="1px solid rgba(0, 0, 0, 0.12)" padding="10px 10px" width="20%" > <h6>Device List</h6></Box>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Device Name</th>
            <th>Active/Deactive</th>
            <th>Start/Stop</th>
            <th>Connect to cloud</th>
            <th></th>
          </tr>
          <tr>
            <th><img width="30" src={meter ==='Electricity'? energy : water}/> {meter==='Electricity'? 'EMETE':'WMETE'}001</th>
            <th>{meter} Meter 1</th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><img width="30" src={settings}/></th>
          </tr>
          <tr>
            <th><img width="30" src={meter ==='Electricity'? energy : water}/>{meter==='Electricity'? 'EMETE':'WMETE'}002</th>
            <th>{meter} Meter 2</th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><img width="30" src={settings}/></th>
          </tr>
          <tr>
            <th><img width="30" src={meter ==='Electricity'? energy : water}/>{meter==='Electricity'? 'EMETE':'WMETE'}003</th>
            <th>{meter} Meter 3</th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><img width="30" src={settings}/></th>
          </tr>
          <tr>
            <th><img width="30" src={meter ==='Electricity'? energy : water}/>{meter==='Electricity'? 'EMETE':'WMETE'}004</th>
            <th>{meter} Meter 4</th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><img width="30" src={settings}/></th>
          </tr>
          <tr>
            <th><img width="30" src={meter ==='Electricity'? energy : water}/>{meter=='Electricity'? 'EMETE':'WMETE'}005</th>
            <th>{meter} Meter 5</th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><img width="30" src={settings}/></th>
          </tr>
          <tr>
            <th><img width="30" src={meter ==='Electricity'? energy : water}/>{meter=='Electricity'? 'EMETE':'WMETE'}006</th>
            <th>{meter} Meter 6</th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><img width="30" src={settings}/></th>
          </tr>
          <tr>
            <th><img width="30" src={meter ==='Electricity'? energy : water}/>{meter=='Electricity'? 'EMETE':'WMETE'}007</th>
            <th>{meter} Meter 7</th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><ToggleSwitch/></th>
            <th><img width="30" src={settings}/></th>
          </tr>
        </thead>
      </Table>
    </div>
  )
}

export default ControlMeter
