import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContext } from "./Helpers/UserContext";
import { useState } from "react";

import RegistrationPage from "./Pages/RegistrationPage";
import MainPage from "./Pages/MainPage";
import MyPilots from "./Pages/MyPilots";
import PilotDetail from "./Pages/PilotDetail";
import MyAirplanes from "./Pages/MyAirplanes";
import AccountBalancePage from './Pages/AccountBalancePage';
import MyAirportsPage from "./Pages/MyAirportsPage";
import PilotsOffer from "./Pages/PilotsOffer";
import PilotsOfferDetail from "./Pages/PilotsOfferDetail";
import AirplanesOffer from "./Pages/AirplanesOffer";

function App() {
  const [user, setUser] = useState({});
  const [money, setMoney] = useState(400000);
  const [costs, setCosts] = useState(0);

  return (
    <Router>
      <div>
        <LoginContext.Provider value={{ user, setUser, money, setMoney, costs, setCosts }}>
          <Routes>
            <Route
              path="/"
              element={<RegistrationPage user={user} setUser={setUser} />}
            />
            <Route path="/main" element={<MainPage />} />
            <Route path="/mypilots" element={<MyPilots /> } />
            <Route path="/mypilots/:id" element={<PilotDetail />} />
            <Route path="/myairplanes" element={<MyAirplanes />} />
            <Route path="/accountbalance" element={<AccountBalancePage />} />
            <Route path="/myairports" element={<MyAirportsPage />} />
            <Route path="/pilotsoffer" element={<PilotsOffer />} />
            <Route path="/pilotsoffer/:id" element={<PilotsOfferDetail />} />
            <Route path="/airplanesoffer" element={<AirplanesOffer />} />
          </Routes>
        </LoginContext.Provider>
      </div>
    </Router>
  );
}

export default App;
