import React from 'react'
import MyPilotsHeader from '../Layouts/MyPilotsHeader';
import MyPilotsList from '../Layouts/MyPilotsList';
import BackgroundImagePilot from '../assets/4.png';
import useFetch from '../Helpers/useFetch';

import DownMenu from "../Layouts/DownMenu";

const MyPilots = () => {

  return (
    <div className='container'>
        <MyPilotsHeader />
        <MyPilotsList />
        <DownMenu />
        <img id="bckgrnd-pilot" src={BackgroundImagePilot} alt="" />
    </div>
  )
}

export default MyPilots