import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Helpers/useFetch";
import { LoginContext } from "../Helpers/UserContext";
import { useContext } from "react";

const AirplanesOfferList = () => {
  const navigate = useNavigate();
  const { data } = useFetch(`http://localhost:8000/airplanes`);
  const { money, setMoney, costs, setCosts } = useContext(LoginContext);


  const buyAirplane = (id) => {
    const airplane = data.find((plane) => plane.id === id);
    fetch("http://localhost:8000/my_airplanes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(airplane),
    }).then(() => {
        const price = airplane.price;
        setMoney(money - price);
        setCosts(costs + price);
      navigate("/main");
    });
  };

  return (
    <div className="inner-container">
      {data.map((airplane) => (
        <div className="card-pilot" key={airplane.id}>
          <h3>Type: {airplane.name}</h3>
          <h5>Capacity: {airplane.capacity} people</h5>
          <h5>Price: {airplane.price} euro</h5>
          <div className="row">
            <button onClick={() => buyAirplane(airplane.id)}>
              Buy Airplane
            </button>
            <button onClick={() => navigate("/main")}>Main Page</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AirplanesOfferList;
