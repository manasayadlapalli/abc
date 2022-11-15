import React from "react";

import { Chart } from "react-google-charts";
import energy from '../../assets/images/meter.jpg'

const parameters = ["Work Status:", "ELectricity Capacity:", "Voltage:", "Current:", "Today Usage", "Last 24 hr Usage:", "This Week's Usage:", "This month's Usage:", "This Year's Usage:"]

const meterDetails = [
  {
    "name": "Electricity Meter 1",
    "path": energy,
    "work_Status": "Working",
    "electricity_capacity": "70%",
    "Voltage": "200V",
    "Current": "10A",
    "Today_Usage": "60KWh",
    "Last_24_hr": "70KWh",
    "weekUsage": "470 KWh",
    "monthUsage": "2100 KWh",
    "yearUsage": "21200 KWh"

  },
  {
    "name": "Electricity Meter 2 ",
    "path": energy,
    "work_Status": "Working",
    "electricity_capacity": "60%",
    "Voltage": "200V",
    "Current": "10A",
    "Today_Usage": "65KWh",
    "Last_24_hr": "75KWh",
    "weekUsage": "490 KWh",
    "monthUsage": "2400 KWh",
    "yearUsage": "25200 KWh"

  },
  {
    "name": "Electricity Meter 3",
    "path": energy,
    "work_Status": "Working",
    "electricity_capacity": "40%",
    "Voltage": "100V",
    "Current": "5A",
    "Today_Usage": "62KWh",
    "Last_24_hr": "72KWh",
    "weekUsage": "470 KWh",
    "monthUsage": "2100 KWh",
    "yearUsage": "21200 KWh"

  },
  {
    "name": "Electricity Meter 4",
    "path": energy,
    "work_Status": "Failing"

  },
]


export const data = [
  [
    "Day",
    "Electricity Meter 1",
    "Electricity Meter 2",
    "Electricity Meter 3",
  ],
  [1, 37.8, 80.8, 41.8],
  [2, 30.9, 69.5, 32.4],
  [3, 25.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 11.9, 17.6, 10.4],
  [6, 8.8, 13.6, 7.7],
  [7, 7.6, 12.3, 9.6],
  [8, 12.3, 29.2, 10.6],
  [9, 16.9, 42.9, 14.8],
  [10, 12.8, 30.9, 11.6],
  [11, 5.3, 7.9, 4.7],
  [12, 6.6, 8.4, 5.2],
  [13, 4.8, 6.3, 3.6],
  [14, 4.2, 6.2, 3.4],
];

export const options = {
  chart: {
    title: "31 days ",
    subtitle: "7 days",
  },
};

const meterStyle = {
  display: ""
}
const meterListStyle = {
  display: "inline-grid",
  textAlign: "center"
}
const detailsWrap = {
  display: "inline-flex"
}
const para = {
  marginTop: '8em'
}

export const MonitorTracking = () => {
  return (

    <>
      <div className="details-wrapper" style={detailsWrap}>
        <div className="parameter" style={para}>
          <ol>
            {parameters.map((data) => (
              <li>{data}</li>
            ))}

          </ol>
        </div>
        <div className="meter-details-1">
          <ol style={meterStyle}>
            {meterDetails.map((data) => (
              <li style={meterListStyle}>
                <span style={{ background: 'lightgray', boxShadow: "5px 5px #888888" }} >{data.name}</span>
                <img style={{ marginTop: "16px", marginLeft: "60px" }} width="60" src={data.path} alt="alt" />
                <span style={data.work_Status === "Working" ? { color: 'green' } : { color: 'red' }} >{data.work_Status}</span>
                <span>{data.Voltage}</span>
                <span>{data.Current}</span>
                <span>{data.Today_Usage}</span>
                <span>{data.Last_24_hr}</span>
                <span>{data.weekUsage}</span>
                <span>{data.monthUsage}</span>
                <span>{data.yearUsage}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Chart
        chartType="Line"
        width="78em"
        height="300px"
        style={{ position: 'relative', left: '10' }}
        data={data}
        options={options}
      />
    </>
  );
}
