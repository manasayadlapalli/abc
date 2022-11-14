import React from 'react'
import Table from 'react-bootstrap/Table';
import '../../styles/Buttons.css'

export const HomePage = () => {
    return (
        <>
        <div className="text-left">
            <h5>Today's Usuage</h5>
            <Table table borderless>
                <thead>
                <tr>
                <th></th>
                    <th className='light-grey'>Todays's Usage <p>29 KWh</p></th>
                    <th></th>
                    <th className='light-grey'>last 24hr Usage <p>29 KWh</p> </th>       
                    <th></th>     
                    <th className='light-grey'>Last Update <p>Date,Time</p> </th>
                    <th></th>
                </tr>
                </thead>
               </Table> 
            <h5>Week's Usuage</h5>
            <Table table borderless>
                <thead>
                <tr>
                <th></th>
                    <th className='light-grey'>Total daily Usage <p>574 KWh</p> </th>
                    <th></th>
                    <th className='light-grey'>Avg Daily  Usage <p>82 KWh</p> </th>       
                    <th></th>     
                    <th className='light-grey'>Max Usage<p>97 KWh</p> </th>
                    <th></th>
                </tr>
                </thead>
               </Table> 
            <h5>Month's Usuage</h5>
            <Table table borderless>
                <thead>
                <tr>
                <th></th>
                <th className='light-grey'>Total daily Usage <p>2370 KWh</p> </th>
                    <th></th>
                    <th className='light-grey'>Avg Daily Usage <p>79 KWh</p> </th>       
                    <th></th>     
                    <th className='light-grey'>Max Usage <p>112 KWh</p> </th>
                    <th></th>
                </tr>
                </thead>
               </Table> 
       
        </div>
        </>
    )
}
