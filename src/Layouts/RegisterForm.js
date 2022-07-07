import React, { createContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';

import RegisterFormHeadline from "../Components/RegisterFormHeadline";
import PilotImage from "../assets/3.png";

const RegisterForm = ({user, setUser}) => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      companyname: "",
      nationality: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("required"),
      lastname: Yup.string().required("required"),
      companyname: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      setUser({
        firstname: values.firstname,
        lastname: values.lastname,
        companyname: values.companyname,
        nationality: values.nationality
      })
      navigate('/main');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="register-form">
      <img src={PilotImage} id="pilot-image" alt="" />
      <RegisterFormHeadline />
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder="First name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstname}
      />
      {formik.touched.firstname && formik.errors.firstname ? (
        <div>{formik.errors.firstname}</div>
      ) : null}
      <input
        type="text"
        id="lastname"
        name="lastname"
        placeholder="Last name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}
      <input
        type="text"
        id="comapnyname"
        name="companyname"
        placeholder="Company name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.companyname}
      />
      {formik.touched.companyname && formik.errors.companyname ? (
        <div>{formik.errors.companyname}</div>
      ) : null}
      <select
        name="nationality"
        id="nationality"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nationality}
      >
        <option value="Slovakia">Slovakia</option>
        <option value="Czech">Czech</option>
        <option value="Poland">Poland</option>
        <option value="Germany">Germany</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Italy">Italy</option>
      </select>
      <input id="submit-button" type="submit" value="Register your company" />
    </form>
  );
};

export default RegisterForm;
