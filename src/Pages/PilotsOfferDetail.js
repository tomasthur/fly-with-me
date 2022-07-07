import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../Helpers/useFetch";
import { LoginContext } from "../Helpers/UserContext";
import { useContext } from "react";

import PilotsOfferDetailHeader from "../Layouts/PilotsOfferDetailHeader";

const PilotsOfferDetail = () => {
  const { id } = useParams();
  const { data, setData } = useFetch(`http://localhost:8000/pilots/${id}`);
  const navigate = useNavigate();
  const { money, setMoney, costs, setCosts } = useContext(LoginContext);

  const buyPilot = () => {
    setData({ ...data, owner: (data.owner = true) });
    fetch(`http://localhost:8000/pilots/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      const price = data.price;
      setMoney(money - price);
      setCosts(costs + price);
      navigate("/main");
    });
  };

  return (
    <div className="container">
      <PilotsOfferDetailHeader />
      {data && (
        <div className="pilot-detail-container">
          <div className="row">
            <h2>
              {data.firstname} {data.lastname}
            </h2>
          </div>
          <div className="row">
            <h3>Position: {data.position}</h3>
          </div>
          <div className="row">
            <h3>Nationality: {data.nationality}</h3>
          </div>
          <div className="row">
            <h3>Salary: {data.salary}</h3>
          </div>
          <div className="row">
            <h3>Price: {data.price}</h3>
          </div>
          <div className="row">
            <h3>Career: {data.practice}</h3>
          </div>
          <div className="row">
            <h3>Type: {data.airplane}</h3>
          </div>
          <div className="row">
            <button onClick={() => buyPilot()}>Hire Pilot</button>
            <button onClick={() => navigate("/main")}>Main Page</button>
            <button onClick={() => navigate("/mypilots")}>My Pilots</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PilotsOfferDetail;
