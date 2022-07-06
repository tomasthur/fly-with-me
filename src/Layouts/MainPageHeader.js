import React from "react";
import { LoginContext } from "../Helpers/UserContext";
import { useContext } from "react";

const MainPageHeader = () => {

    const { user } = useContext(LoginContext);

  return (
    <header className="info-panel">
      <h4>
        Welcome, {user.firstname} {user.lastname}!
      </h4>
      <p>
        This is the headquarters of your company. Here <br /> you can buy / sell
        planes, hire and fire pilots
        <br /> and much more ...
      </p>
    </header>
  );
};

export default MainPageHeader;
