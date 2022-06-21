import React from 'react'
import MyPilotsHeader from '../Layouts/MyPilotsHeader';
import MyPilotsList from '../Layouts/MyPilotsList';
import BackgroundImagePilot from '../assets/4.png';

const MyPilots = () => {
  return (
    <div className='container'>
        <MyPilotsHeader />
        <MyPilotsList />
        <img id="bckgrnd-pilot" src={BackgroundImagePilot} alt="" />
    </div>
  )
}

export default MyPilots