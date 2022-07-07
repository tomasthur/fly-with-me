import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Helpers/useFetch";

const AirplanesOfferList = () => {
  const { data } = useFetch("http://localhost:8000/airplanes");
  const navigate = useNavigate();

  return (
    <div className="inner-container">
      {data.map((airplane) => (
        <div className="card-pilot" key={airplane.id}>
          <h3>Type: {airplane.name}</h3>
          <h5>Capacity: {airplane.capacity} people</h5>
          <h5>Price: {airplane.price} euro</h5>
          <div className="row">
            <button>Buy Airplane</button>
            <button onClick={() => navigate('/main')}>Main Page</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AirplanesOfferList;
