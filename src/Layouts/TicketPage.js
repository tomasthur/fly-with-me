import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../Helpers/useFetch";
import { LoginContext } from "../Helpers/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const TicketPage = ({ ticketPrice, setTicketPrice, tankPrice, rent }) => {
  const { data, setData } = useFetch("http://localhost:8000/pilots");
  const navigate = useNavigate();

  const [firstClassPrice, setFirstClassPrice] = useState(0);
  const [secondClassPrice, setSecondClassPrice] = useState(0);
  const [ticketsResult, setTicketsResult] = useState(false);
  const [firstClassTickets, setFirstClassTickets] = useState();
  const [secondClassTickets, setSecondClassTickets] = useState();
  const [result, setResult] = useState(0);
  const salary = data.filter((select) => select.isSelected).map((pilot) => pilot.salary);
  const pilotsSalary = salary[0] + salary[1];

  const { money, setMoney, earnings, setEarnings, costs, setCosts } = useContext(LoginContext);
  
  const countTicketPrice = () => {
    const firstClassLoad = Math.floor(Math.random() * 30);
    const secondClassLoad = Math.floor(Math.random() * 120);

    setFirstClassTickets(firstClassLoad);
    setSecondClassTickets(secondClassLoad);

    const moneyFirstClass = firstClassLoad * firstClassPrice;
    const moneySecondClass = secondClassLoad * secondClassPrice;
    const priceForTicket = moneyFirstClass + moneySecondClass;

    setTicketPrice(priceForTicket);

    setCosts(costs + tankPrice + pilotsSalary + rent);
    setEarnings(priceForTicket);

    const fastCount = tankPrice + pilotsSalary + rent;
    setMoney(money + priceForTicket - fastCount);

    setResult(priceForTicket - fastCount);

    setTicketsResult(true);
  };

  return (
    <div>
      <h3 id="container-margin">Ticket Page</h3>
      <div className="card-pilot">
        <h5>Here you can set prices of the tickets.</h5>
        <div className="inner-container">
          <input
            type="number"
            name="first-class"
            id="first-class"
            placeholder="first-class ticket price"
            value={firstClassPrice}
            onChange={(e) => setFirstClassPrice(e.target.value)}
          />
          <input
            type="number"
            name="second-class"
            id="second-class"
            placeholder="second-class ticket price"
            value={secondClassPrice}
            onChange={(e) => setSecondClassPrice(e.target.value)}
          />
          <button onClick={() => countTicketPrice()}>
            Confirm ticket price`s
          </button>
        </div>
        {ticketsResult && (
          <div className="inner-container">
            <h5>You sold {firstClassTickets} tickets in first class!</h5>
            <h5>In second class you sold {secondClassTickets} tickets!</h5>
          </div>
        )}
      </div>
      {ticketsResult && (
        <div className="inner-container">
          <h3>Flight result!</h3>
          <div className="card-pilot">
            {data
              .filter((select) => select.isSelected)
              .map((pilots) => (
                <div key={pilots.id}>
                  <h5>
                    Pilot: {pilots.firstname} {pilots.lastname}
                  </h5>
                </div>
              ))}
            <div>
              <h5>First Class: {firstClassTickets} tickets</h5>
              <h5>Second Class: {secondClassTickets} tickets</h5>
              <h5 id="red">Pilot`s salary: {pilotsSalary} euro</h5>
              <h5 id="green">Price for tickets: {ticketPrice} euro</h5>
              <h5 id="red">Price for fuel: -{tankPrice} euro</h5>
              <h5 id="red">Price for Airport`s rent: {rent} euro</h5>
              <h4 id={result>0 ? 'green' : 'red'}>Result: {result} euro!</h4>
            </div>
          </div>
          <button onClick={() => navigate('/flightradar')}>Start Your Flight!</button>
        </div>
      )}
    </div>
  );
};

export default TicketPage;
