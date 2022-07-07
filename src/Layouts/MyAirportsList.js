import React from "react";
import useFetch from "../Helpers/useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MyAirportsList = () => {
  const { data, setData } = useFetch("http://localhost:8000/airports");
  const navigate = useNavigate();
  const [letisko, setLetisko] = useState({})

  const cancelContract = (id) => {
    const finder = data.find((data) => data.id === id);
    const airport = {...finder, owner: false};

    fetch(`http://localhost:8000/airports/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(airport),
    }).then(() => {
        navigate('/main');
    });
  };

  return (
    <div className="inner-container">
      {data
        .filter((data) => data.owner === true)
        .map((filter) => (
          <div className="card-pilot" key={filter.id}>
            <h3>{filter.name}</h3>
            <h5>capacity: {filter.capacity} people</h5>
            <h5>price for rent: {filter.rent} euro</h5>
            <div className="row">
              <button onClick={() => cancelContract(filter.id)}>
                Cancel contract
              </button>
              <button onClick={() => navigate("/main")}>Main Page</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MyAirportsList;
