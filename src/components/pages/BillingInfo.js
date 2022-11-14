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
import BillingTable from './BillingTable'
import { Link } from 'react-router-dom'
import { red } from '@mui/material/colors'

function BillingInfo() {
  const [meter, setMeter] = useState('');
  return (
    
    <div className="table-wrapper" >
      <br></br>
      
      <h1 style={{ justifyContent:'center', alignItems:'center', color: 'white', backgroundColor: 'green', width: 800 }}>Billing Information</h1>

      <BillingTable></BillingTable>

      <br></br>
      
      <Link to="/bill-payment">
      <div style={{ display: "flex" }}>
          <button
              style={{ marginLeft: "auto", backgroundColor:'green' , fontSize: '18px', 
              width:'120px', color: 'white', borderRadius:'5px'}}
            >
              Next
            </button>
            </div>
        </Link>
      
    </div>
  )
}

export default BillingInfo