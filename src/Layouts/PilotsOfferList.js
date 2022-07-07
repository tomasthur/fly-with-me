import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../Helpers/useFetch";

const PilotsOfferList = () => {
  const { data } = useFetch("http://localhost:8000/pilots");
  const navigate = useNavigate();

  return (
    <div className="inner-container">
      {data
        .filter((data) => (data.owner === false))
        .map((select) => (
          <div className="card-pilot">
            <div className="row">
                <h3>{select.firstname}</h3>
                <h3>{select.lastname}</h3>
            </div>
            <h5>function: {select.position}</h5>
            <h5>airplane type: {select.airplane}</h5>
            <div className="row">
                <button onClick={() => navigate(`/pilotsoffer/${select.id}`)}>Pilot Detail</button>
                <button onClick={() => navigate('/main')}>Main Page</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PilotsOfferList;
