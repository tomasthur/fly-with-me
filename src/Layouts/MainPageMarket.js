import React from 'react'
import PilotsOffer from '../assets/pilots_offer_icon.png';
import AirplanesOffer from '../assets/airplanes_offer_icon.png';
import AirportsOffer from '../assets/airports_offer_icon.png';

const MainPageMarket = () => {
  return (
    <div className='inner-container'>
        <h3>Aviation Market</h3>
        <div className="row">
            <div className="card">
                <img src={PilotsOffer} alt="" />
                <h6>Pilots Offer</h6>
            </div>
            <div className="card">
                <img src={AirplanesOffer} alt="" />
                <h6>Airplanes Offer</h6>
            </div>
            <div className="card">
                <img src={AirportsOffer} alt="" />
                <h6>Airports Offer</h6>
            </div>
        </div>
    </div>
  )
}

export default MainPageMarket