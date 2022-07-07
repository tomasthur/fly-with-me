import React from 'react'
import AirportsOfferHeader from '../Layouts/AirportsOfferHeader';
import AirportsOfferList from '../Layouts/AirportsOfferList';
import MyAirportsBackground from '../assets/5.png';

const AirportsOffer = () => {
  return (
    <div className='container'>
        <AirportsOfferHeader />
        <AirportsOfferList />
        <img src={MyAirportsBackground} alt="" id='myAirportsBckgrnd' />
    </div>
  )
}

export default AirportsOffer