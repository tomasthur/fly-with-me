import React from 'react'
import FlightPlannerHeadline from '../Layouts/FlightPlannerHeadline';
import FlightPlannerPilots from '../Layouts/FlightPlannerPilots';

const FlightPlanner = () => {
  return (
    <div className='container'>
        <FlightPlannerHeadline />
        <FlightPlannerPilots />
    </div>
  )
}

export default FlightPlanner