import React from 'react'
import Map from '../pages/Map'
import '../../styles/device.css'

function Admin() {
  return (
    <div className='maps'>
      <br/><h3>IoT Stations location on Google Maps</h3><br/>
      <Map/>      
      
    </div>
  )
}

export default Admin
