import React from 'react'
import PilotsOfferHeader from '../Layouts/PilotsOfferHeader'
import PilotsOfferList from '../Layouts/PilotsOfferList'
import BackgroundImagePilot from '../assets/4.png';

const PilotsOffer = () => {
  return (
    <div className='container'>
        <PilotsOfferHeader />
        <PilotsOfferList />
        <img id="bckgrnd-pilot" src={BackgroundImagePilot} alt="" />
    </div>
  )
}

export default PilotsOffer