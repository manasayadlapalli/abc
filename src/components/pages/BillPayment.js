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
import BillingCard from './BillingCard'

function BillPayment() {
  const [meter, setMeter] = useState('');
  return (
    
    <div className="table-wrapper" >
      <br></br>
      <h1 style={{ justifyContent:'center', alignItems:'center', color: 'white', backgroundColor: 'green', width: 800 }}>Bill Payment</h1>
      <BillingCard ></BillingCard>
    </div>
  )
}

export default BillPayment