import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginContext } from "./Helpers/UserContext";
import { useState } from "react";

import RegistrationPage from "./Pages/RegistrationPage";
import MainPage from "./Pages/MainPage";
import MyPilots from "./Pages/MyPilots";
import PilotDetail from "./Pages/PilotDetail";

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <div>
        <LoginContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route
              path="/"
              element={<RegistrationPage user={user} setUser={setUser} />}
            />
            <Route path="/main" element={<MainPage />} />
            <Route path="/mypilots" element={<MyPilots /> } />
            <Route path="/mypilots/:id" element={<PilotDetail />} />
          </Routes>
        </LoginContext.Provider>
      </div>
    </Router>
  );
}

export default App;
