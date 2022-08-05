import React from 'react'
import FlightRadarHeader from '../Layouts/FlightRadarHeader';
import FlightRadarPath from '../Layouts/FlightRadarPath';

const FlightRadar = () => {

  return (
    <div className='container'>
        <FlightRadarHeader />
        <FlightRadarPath />
    </div>
  )
}

export default FlightRadar