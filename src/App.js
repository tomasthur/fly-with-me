import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContext } from "./Helpers/UserContext";
import { useState } from "react";

import RegistrationPage from "./Pages/RegistrationPage";
import MainPage from "./Pages/MainPage";
import MyPilots from "./Pages/MyPilots";
import PilotDetail from "./Pages/PilotDetail";
import MyAirplanes from "./Pages/MyAirplanes";

function App() {
  const [user, setUser] = useState({});
  const [money, setMoney] = useState(400000);

  return (
    <Router>
      <div>
        <LoginContext.Provider value={{ user, setUser, money, setMoney }}>
          <Routes>
            <Route
              path="/"
              element={<RegistrationPage user={user} setUser={setUser} />}
            />
            <Route path="/main" element={<MainPage />} />
            <Route path="/mypilots" element={<MyPilots /> } />
            <Route path="/mypilots/:id" element={<PilotDetail />} />
            <Route path="/myairplanes" element={<MyAirplanes />} />
          </Routes>
        </LoginContext.Provider>
      </div>
    </Router>
  );
}

export default App;
