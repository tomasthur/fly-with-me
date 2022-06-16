import React from "react";
import RegisterFormHeadline from "../Components/RegisterFormHeadline";

const RegisterForm = () => {
  return (
    <div className="register-form">
      <RegisterFormHeadline />
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="Company name"/>
      <select name="nationality" id="nationality">
        <option value="Slovakia">Slovakia</option>
        <option value="Czech">Czech</option>
        <option value="Poland">Poland</option>
        <option value="Germany">Germany</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Italy">Italy</option>
      </select>
      <input id="submit-button" type="submit" value="Register your company" />
    </div>
  );
};

export default RegisterForm;
