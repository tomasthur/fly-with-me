import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../Helpers/useFetch";

import PilotDetailHeader from "../Layouts/PilotDetailHeader";

const PilotDetail = () => {
  const { id } = useParams();
  const { data } = useFetch(`http://localhost:8000/my_pilots/${id}`);
  const navigate = useNavigate();

  const releasePilot = () => {
    const pilot = data;
    console.log(pilot);
  }

  return (
    <div className="container">
      <PilotDetailHeader />
      {data && (
          <div className="pilot-detail-container">
            <div className="row">
              <h2>
                {data.firstname} {data.lastname}
              </h2>
            </div>
            <div className="row">
              <h3> Position: {data.position}</h3>
            </div>
            <div className="row">
              <h3>Nationality: {data.nationality}</h3>
            </div>
            <div className="row">
              <h3>Salary: {data.salary} euro</h3>
            </div>
            <div className="row">
              <h3>Price: {data.price} euro</h3>
            </div>
            <div className="row">
              <h3>Career: {data.practice} years</h3>
            </div>
            <div className="row">
              <h3>Type: {data.airplane}</h3>
            </div>
            <div className="row">
              <button onClick={() => releasePilot()}>Release Pilot</button>
              <button onClick={() => navigate('/main')}>Main Page</button>
              <button onClick={() => navigate('/mypilots')}>My Pilots</button>
            </div>
          </div>
      )}
    </div>
  );
};

export default PilotDetail;
