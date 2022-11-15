import React from 'react'
import '../../styles/Buttons.css'
import { useState } from 'react'
import { MonitorTracking }from './MonitorTracking'

export const MonitorTrackingOptions = () => {
  const [meter, setMeter] = useState('');
  return (
    
    <div className="table-wrapper">
      <br></br>
      <div style={{display:'flex', justifyContent: "center"}}>
      <button className='light-grey' style={{border:"1px solid rgba(0, 0, 0, 0.5)",fontSize:"15px" ,width:"100px", color: 'green'  }} onClick={(e) => setMeter('iot')} disabled>
        IOT
      </button>
      <button className='light-grey' style={{border:"1px solid rgba(0, 0, 0, 0.5)",fontSize:"15px" ,width:"100px", color: 'green'  }} onClick={(e) => setMeter('meter')}>
        Meter
      </button>
      </div>
      {meter === 'meter' && <MonitorTracking/>}
    
      </div>
  )
}
     