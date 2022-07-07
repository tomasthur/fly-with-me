import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Helpers/useFetch";

const AirportsOfferList = () => {
  const { data } = useFetch("http://localhost:8000/airports");
  const navigate = useNavigate();

  return (
    <div className="inner-container">
      {data
        .filter((airport) => airport.owner === false)
        .map((select) => (
          <div className="card-pilot">
            <h3>Name: {select.name}</h3>
            <h5>Capacity: {select.capacity} people</h5>
            <h5>Rent: {select.rent} euro per month</h5>
            <h5>Price: {select.price} euro</h5>
            <div className="row">
              <button>Buy Airport</button>
              <button onClick={() => navigate('/main')}>Main Page</button>
              <button onClick={() => navigate('/myairports')}>My Airports</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AirportsOfferList;
