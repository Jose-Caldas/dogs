import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginCreate from "./LoginCreate";
import LoginForm from "./LoginForm";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginpasswordReset from "./LoginpasswordReset";

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="reset" element={<LoginpasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
