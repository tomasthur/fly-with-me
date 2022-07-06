import React from 'react'

import MyAirplanesHeader from '../Layouts/MyAirplanesHeader';
import MyAirplanesList from '../Layouts/MyAirplanesList';
import BottomMenu from "../Layouts/BottomMenu";
import AirplaneBackground from '../assets/7.png';

const MyAirplanes = () => {
  return (
    <div className='container'>
        <MyAirplanesHeader />
        <MyAirplanesList />
        <BottomMenu />
        <img id='bckgrnd-airplane' src={AirplaneBackground} alt="" />
    </div>
  )
}

export default MyAirplanes