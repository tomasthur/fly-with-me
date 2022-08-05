import React from "react";
import { useState } from "react";
import Airplane from "../assets/airplanes_icon.png";
import useFetch from "../Helpers/useFetch";

const ChoosePilots = ({ tankPage, setTankPage }) => {
  const { data, setData } = useFetch("http://localhost:8000/pilots");
  const [pilots, setPilots] = useState(0);

  const selectPilot = (id) => {
    if (tankPage === false) {
      const pilot = data.find((select) => select.id === id);
      const selectedPilot = { ...pilot, isSelected: true };
      setData((currentState) => [
        ...currentState.filter((select) => select.id !== id),
        selectedPilot,
      ]);
      setPilots(pilots + 1);

      fetch(`http://localhost:8000/pilots/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedPilot),
      });
    }
  };

  const returnPilot = (id) => {
    if (tankPage === false) {
      const pilot = data.find((select) => select.id === id);
      const selectedPilot = { ...pilot, isSelected: false };
      setData((currentState) => [
        ...currentState.filter((select) => select.id !== id),
        selectedPilot,
      ]);
      setPilots(pilots - 1);

      fetch(`http://localhost:8000/pilots/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedPilot),
      });
    }
  };

  const confirmPilots = () => {
    setTankPage(true);
  };

  return (
    <div className="card-pilot">
      <img src={Airplane} alt="" id="cockpit" />
      <div className="row">
        <div className="column">
          {data
            .filter(
              (pilot) => pilot.owner === true && pilot.isSelected === false
            )
            .map((select) => (
              <div
                className="card-pilot"
                id="pilots-selection"
                key={select.id}
                onClick={() => selectPilot(select.id)}
              >
                <h6>
                  {select.firstname} {select.lastname}
                </h6>
                <h6>{select.position}</h6>
                <h6>{select.airplane}</h6>
              </div>
            ))}
        </div>
        <div className="column">
          <h5>Pilots: {pilots} / 2</h5>
          {data
            .filter((pilot) => pilot.isSelected === true)
            .map((select) => (
              <div
                className="card-pilot"
                key={select.id}
                onClick={() => returnPilot(select.id)}
              >
                <h6>
                  {select.firstname} {select.lastname}
                </h6>
              </div>
            ))}
        </div>
      </div>
      <button onClick={() => confirmPilots()}>Confirm Crew</button>
    </div>
  );
};

export default ChoosePilots;
