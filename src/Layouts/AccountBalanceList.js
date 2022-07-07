import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { LoginContext } from "../Helpers/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AccountBalanceList = () => {
  const { user, money, setMoney, costs, setCosts } = useContext(LoginContext);
  const navigate = useNavigate();

  const data = [
    { name: "Group A", value: money, fill: "#2FC8A3" },
    { name: "Group B", value: costs, fill: "red" },
  ];

  const mortgageData = [
    { name: "Group A", value: 1, fill: "#2FC8A3" },
    { name: "Group B", value: 0, fill: "red" },
  ];

  return (
    <div className="inner-container">
      <div className="card-pilot">
        <h4>{user.companyname}</h4>
        <div className="row">
          <h5>Account balance: </h5>
          <h5>{money} eur</h5>
        </div>
        <PieChart width={600} height={200}>
          <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={80} />
        </PieChart>
        <div className="row">
          <h5>Your money: {money} eur</h5>
        </div>
        <div className="row">
          <h5>Your costs: {costs} eur</h5>
        </div>
        <button onClick={() => navigate("/main")}>Main Page</button>
      </div>
      <div className="card-pilot">
        <h4>Bank</h4>
        <div className="row">
          <h5>Mortgage: </h5>
          <h5>0 eur</h5>
        </div>
        <PieChart width={600} height={200}>
          <Pie
            dataKey="value"
            data={mortgageData}
            cx="50%"
            cy="50%"
            outerRadius={80}
          />
        </PieChart>
        <div className="row">
          <input type="number" name="mortgage" id="mortgage" />
        </div>
        <div className="row">
          <button>Apply for a loan</button>
        </div>
        <div className="row">
          <h5>Your mortgage: 0eur</h5>
        </div>
        <div className="row">
          <h5>Paid: 0 eur</h5>
        </div>
      </div>
    </div>
  );
};

export default AccountBalanceList;
