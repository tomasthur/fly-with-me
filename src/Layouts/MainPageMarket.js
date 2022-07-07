import React from 'react'
import { useNavigate } from "react-router-dom";

import PilotsOffer from '../assets/pilots_offer_icon.png';
import AirplanesOffer from '../assets/airplanes_offer_icon.png';
import AirportsOffer from '../assets/airports_offer_icon.png';

const MainPageMarket = () => {

    const navigate = useNavigate();

  return (
    <div className='inner-container'>
        <h3>Aviation Market</h3>
        <div className="row">
            <div className="card" onClick={() => navigate('/pilotsoffer')}>
                <img src={PilotsOffer} alt="" />
                <h6>Pilots Offer</h6>
            </div>
            <div className="card" onClick={() => navigate('/airplanesoffer')}>
                <img src={AirplanesOffer} alt="" />
                <h6>Airplanes Offer</h6>
            </div>
            <div className="card" onClick={() => navigate('/airportsoffer')}>
                <img src={AirportsOffer} alt="" />
                <h6>Airports Offer</h6>
            </div>
        </div>
    </div>
  )
}

export default MainPageMarket