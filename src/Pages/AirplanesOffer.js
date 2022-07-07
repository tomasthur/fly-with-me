import React from 'react'
import AirplanesOfferHeader from '../Layouts/AirplanesOfferHeader';
import AirplanesOfferList from '../Layouts/AirplanesOfferList';
import AirplaneBackground from '../assets/7.png';

const AirplanesOffer = () => {
  return (
    <div className='container'>
        <AirplanesOfferHeader />
        <AirplanesOfferList />
        <img id='bckgrnd-airplane' src={AirplaneBackground} alt="" />
    </div>
  )
}

export default AirplanesOffer