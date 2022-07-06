import React from 'react'
import MyPilotsHeader from '../Layouts/MyPilotsHeader';
import MyPilotsList from '../Layouts/MyPilotsList';
import BackgroundImagePilot from '../assets/4.png';

import BottomMenu from "../Layouts/BottomMenu";

const MyPilots = () => {

  return (
    <div className='container'>
        <MyPilotsHeader />
        <MyPilotsList />
        <BottomMenu />
        <img id="bckgrnd-pilot" src={BackgroundImagePilot} alt="" />
    </div>
  )
}

export default MyPilots