import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./Pages/RegistrationPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
