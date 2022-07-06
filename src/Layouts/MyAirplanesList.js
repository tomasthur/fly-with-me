import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Helpers/useFetch";
import { LoginContext } from "../Helpers/UserContext";
import { useContext } from "react";

const MyAirplanesList = () => {
  const { data } = useFetch("http://localhost:8000/my_airplanes");
  const navigate = useNavigate();
  const { money, setMoney } = useContext(LoginContext);

  const sellAirplane = (id) => {
    const price = Math.floor(Math.random() * 290000);
    alert("Your airplane was sold for " + price + " euro!");
    fetch("http://localhost:8000/my_airplanes/" + id, {
      method: "DELETE",
    }).then(() => {
      setMoney(price + money);
      navigate('/main');
    });
  };

  return (
    <div className="inner-container">
      {data.map((airplanes) => (
        <div className="card-pilot" key={airplanes.id}>
          <h3>type: {airplanes.name}</h3>
          <h5>capacity: {airplanes.capacity}</h5>
          <h5>price: {airplanes.price} eur</h5>
          <div className="row">
            <button onClick={() => sellAirplane(airplanes.id)}>
              Sell Airplane in Auction
            </button>
            <button onClick={() => navigate("/main")}>Main Page</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAirplanesList;
