import React from 'react'
import MyAirportsHeader from '../Layouts/MyAirportsHeader';
import MyAirportsList from '../Layouts/MyAirportsList';
import BottomMenu from '../Layouts/BottomMenu';
import MyAirportsBackground from '../assets/5.png';

const MyAirportsPage = () => {
  return (
    <div className='container'>
        <MyAirportsHeader />
        <MyAirportsList />
        <BottomMenu />
        <img src={MyAirportsBackground} alt="" id='myAirportsBckgrnd' />
    </div>
  )
}

export default MyAirportsPage