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
import { red } from '@mui/material/colors'
import {
    SentimentVerySatisfied,
    SentimentVeryDissatisfied
 } from '@material-ui/icons';

function BillingConfirmation() {
  const [meter, setMeter] = useState('');
  return (
    
    <div className="table-wrapper" >
      <br></br>
      <h2 style={{ justifyContent:'center', alignItems:'center', color: 'green' }} ><SentimentVerySatisfied fontSize="large" color="primary"/>Thankyou for your Payment!</h2>

      <br></br>
      
    </div>
  )
}

export default BillingConfirmation