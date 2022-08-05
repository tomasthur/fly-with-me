import React from "react";
import { useState } from "react";
import useFetch from "../Helpers/useFetch";
import { LoginContext } from "../Helpers/UserContext";
import { useContext } from "react";

const ChooseAirportsPage = ({ setTicketPage, rent, setRent }) => {
  const { data, setData } = useFetch("http://localhost:8000/airports");
  const [manager, setManager] = useState(false);
  const { setDeparture, setArrival } = useContext(LoginContext);

  const selectAirport = (id) => {
    if (manager === false) {
      const airport = data.find((select) => select.id === id);
      const selectedAirport = { ...airport, isSelected: true, departure: true };
      setData((currentState) => [
        ...currentState.filter((select) => select.id !== id),
        selectedAirport,
      ]);

      fetch(`http://localhost:8000/airports/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedAirport),
      });
      setDeparture(airport.name);
      setManager(true);
      setRent(rent + airport.rent);
    }
    if (manager === true) {
      const airport = data.find((select) => select.id === id);
      const selectedAirport = { ...airport, isSelected: true, arrival: true };
      setData((currentState) => [
        ...currentState.filter((select) => select.id !== id),
        selectedAirport,
      ]);

      fetch(`http://localhost:8000/airports/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedAirport),
      });
      setArrival(airport.name);
      setRent(rent + airport.rent);
    }
  };

  const setAirportsName = () => {
    setTicketPage(true);
  };

  return (
    <div>
      <h3 id="container-margin">Choose Airport</h3>
      <div className="card-pilot">
        <div className="row">
          <div className="column">
            {data
              .filter(
                (select) => select.owner === true && select.isSelected === false
              )
              .map((airport) => (
                <div
                  className="card-pilot"
                  onClick={() => selectAirport(airport.id)}
                >
                  <h5>{airport.name}</h5>
                </div>
              ))}
          </div>
          <div className="column">
            <div className="column">
              <h3>Departure:</h3>
              {data
                .filter(
                  (select) =>
                    select.isSelected === true && select.departure === true
                )
                .map((departure) => (
                  <div className="card-pilot">
                    <h5>{departure.name}</h5>
                  </div>
                ))}
            </div>
            <h3>Arrival:</h3>
            {data
              .filter(
                (select) =>
                  select.isSelected === true && select.arrival === true
              )
              .map((departure) => (
                <div className="card-pilot">
                  <h5>{departure.name}</h5>
                </div>
              ))}
          </div>
        </div>
        <button id="container-margin" onClick={() => setAirportsName()}>
          Confirm Airports
        </button>
      </div>
    </div>
  );
};

export default ChooseAirportsPage;
