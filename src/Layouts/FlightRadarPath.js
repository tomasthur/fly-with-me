import React from "react";
import Airplane from "../assets/airplanes_icon.png";
import { LoginContext } from "../Helpers/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../Helpers/useFetch";

const FlightRadarPath = () => {
  const { departure, arrival } = useContext(LoginContext);
  const { data, setData } = useFetch("http://localhost:8000/pilots");

  const [sample, setSample] = useState(true);
  const changeScreen = () => {
    setTimeout(() => {
      setSample(false);
    }, 13000);
    if (sample === false) {
      navigate("/accountbalance");
    }
  };

  useEffect(() => {
    changeScreen();
  });

  const navigate = useNavigate();

  return (
    <div className="inner-container">
      <img id="airplane" src={Airplane} alt="" />
      <h2 id="airport-departure">{departure}</h2>
      <h2 id="airport-arrival">{arrival}</h2>
    </div>
  );
};

export default FlightRadarPath;
