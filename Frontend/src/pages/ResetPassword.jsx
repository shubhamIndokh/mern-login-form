import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const ResetPassword = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("resetpassword", {
        email,
        code,
        newPassword,
      });
      localStorage.setItem("token", res.data.token);
      alert(res.data.message);
      navigate("/profile");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col  items-center rounded-2xl bg-white w-100 h-96">
      <h1 className="justify-center text-4xl font-bold mt-10">
        Reset Password
      </h1>
      <form
        onSubmit={handleReset}
        className="flex flex-col gap-5 justify-around w-full p-8 "
      >
        <div className="border-b-[1px] flex items-center  gap-12 border-gray-400 w-85 ">
          <label htmlFor="" className="font-bold text-gray-600">
            Email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="rounded-[5px] w-[20rem] h-[2rem] px-2  focus:outline-none  "
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="border-b-[1px] flex items-center  gap-14 border-gray-400 w-85 ">
          <label htmlFor="" className="font-bold text-gray-600">
            OTP
          </label>
          <input
            onChange={(e) => {
              setCode(e.target.value);
            }}
            className="rounded-[5px] w-[20rem] h-[2rem] px-2  focus:outline-none  "
            type="text"
            placeholder="Enter OTP here . . . ."
          />
        </div>
        <div className="border-b-[1px] flex items-center  gap-1 border-gray-400 w-85 ">
          <label htmlFor="" className="font-bold text-gray-600">
            New Password
          </label>
          <input
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            className="rounded-[5px] w-[20rem] h-[2rem] px-2  focus:outline-none  "
            type="password"
            placeholder="Enter new password"
          />
        </div>
        <button className="bg-blue-200 h-10 text-xl font-semibold uppercase rounded-[5px] mt-7 hover:cursor-pointer active:scale-95 active:bg-amber-100">
          Reset
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
