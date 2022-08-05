import React from "react";
import { useState } from "react";
import ChoosePilots from "./ChoosePilots";
import TankPage from "./TankPage";
import TicketPage from "./TicketPage";
import ChooseAirportsPage from '../Layouts/ChooseAirportsPage';

const FlightPlannerPilots = () => {
  const [tankPage, setTankPage] = useState(false);
  const [ticketPage, setTicketPage] = useState(false);
  const [airportPage, setAirportPage] = useState(false);

  const [rent, setRent] = useState(0);
  const [tankPrice, setTankPrice] = useState(0);
  const [ticketPrice, setTicketPrice] = useState(0);

  return (
    <div className="inner-container">
      <h3>Pilot`s choose</h3>
      <ChoosePilots tankPage={tankPage} setTankPage={setTankPage} />
      {tankPage && <TankPage setAirportPage={setAirportPage} tankPrice={tankPrice} setTankPrice={setTankPrice} />}
      {airportPage && <ChooseAirportsPage setTicketPage={setTicketPage} rent={rent} setRent={setRent} />}
      {ticketPage && <TicketPage ticketPrice={ticketPrice} setTicketPrice={setTicketPrice} tankPrice={tankPrice} rent={rent} />}
    </div>
  );
};

export default FlightPlannerPilots;
