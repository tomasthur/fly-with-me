import React from "react";
import { useState } from "react";

const TankPage = ({setAirportPage, setTankPrice}) => {
  const [fuel, setFuel] = useState(0);

  const setFuelCondition = (e) => {
    setFuel(e.target.value);
  };

  const countFuelPrice = () => {
    setTankPrice(fuel * 5);
    setAirportPage(true)
  }

  return (
    <div>
      <h3 id="container-margin">Tank Page</h3>
      <div className="card-pilot">
        <h5>The max size of fuel tank is 1500 kilograms.</h5>
        <h5>Actual price for one kilogram of fuel is 5 euro.</h5>
        <input
          type="range"
          id="tank"
          name="tank"
          min={0}
          max={1500}
          value={fuel}
          onChange={setFuelCondition}
        />
        <h5>In your fuel tank is: {fuel} liters.</h5>
        <button onClick={() => countFuelPrice()}>Confirm fuel tank</button>
      </div>
    </div>
  );
};

export default TankPage;
