import React from "react";
import { LoginContext } from "../Helpers/UserContext";
import { useContext } from "react";

const AccountBalanceHeader = () => {
  const { money } = useContext(LoginContext);

  return (
    <header className="info-panel">
      <h4>Account Balance</h4>
      <p>
        You can see your account balance here - your
        <br />
        expenses, incomes etc. You can take a loan <br />
        from a bank too.
      </p>
    </header>
  );
};

export default AccountBalanceHeader;
