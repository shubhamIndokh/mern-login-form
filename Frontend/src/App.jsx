import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Verify from "./pages/Verify";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="verifyemail" element={<Verify />} />
        <Route path="profile" element={<Profile />} />
        <Route path="forgetpassword" element={<ForgetPassword />} />
        <Route path="resetpassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
