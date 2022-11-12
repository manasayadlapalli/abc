import React from 'react'
import '../../styles/Buttons.css'
import Table from 'react-bootstrap/Table'
import energy from '../../assets/images/energy-meter-icon.png'
import water from '../../assets/images/water-meter-icon.png'
import ToggleSwitch from '../ToggleSwitch'
import settings from '../../assets/images/settings-icon.png'
import Box from '@mui/material/Box'
import { useState } from 'react'
import ControlMeter from './ControlMeter'

function ControlConfiguration() {
  const [meter, setMeter] = useState('');
  return (
    
    <div className="table-wrapper">
      <br></br>
      <div style={{display:'flex', justifyContent: "center"}}>
      <button disabled={true} className='light-grey' style={{border:"1px solid rgba(0, 0, 0, 0.5)",fontSize:"15px" ,width:"100px", color: 'green'  }} onClick={(e) => setMeter('iot')}>
        IOT
      </button>
      <button className='light-grey' style={{border:"1px solid rgba(0, 0, 0, 0.5)",fontSize:"15px" ,width:"100px", color: 'green'  }} onClick={(e) => setMeter('meter')}>
        Meter
      </button>
      </div>
      {meter === 'meter'?<ControlMeter/>:null}
      
    </div>
  )
}

export default ControlConfiguration
