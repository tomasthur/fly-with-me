import React from 'react'
import {useNavigate} from 'react-router-dom';
import Pilots from '../assets/pilots_icon.png';
import Airplanes from '../assets/airplanes_icon.png';
import Bill from '../assets/bill_icon.png';
import Airports from '../assets/airports_icon.png';
import Schedule from '../assets/schedule_icon.png';
import SellCompany from '../assets/sell_icon.png';

const MainPageCompany = () => {

    const navigate = useNavigate();

  return (
    <div className='inner-container'>
        <h3>Your Company</h3>
        <div className="row">
            <div className="card" onClick={() => navigate('/mypilots')}>
                <img src={Pilots} alt="" />
                <h6>My Pilots</h6>
            </div>
            <div className="card">
                <img src={Airplanes} alt="" />
                <h6>My Airplanes</h6>
            </div>
            <div className='card'>
                <img src={Bill} alt="" />
                <h6>Account Balance</h6>
            </div>
        </div>

        <div className="row">
            <div className="card">
                <img src={Airports} alt="" />
                <h6>Airports Offer</h6>
            </div>
            <div className="card">
                <img src={Schedule} alt="" />
                <h6>Flight Planner</h6>
            </div>
            <div className='card'>
                <img src={SellCompany} alt="" />
                <h6>Sell Company</h6>
            </div>
        </div>
    </div>
  )
}

export default MainPageCompany