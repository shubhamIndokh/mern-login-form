import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api.js";

const Verify = () => {
  const [code, setCode] = useState("");

  const navigate = useNavigate();
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const email = localStorage.getItem("email");
      const res = await API.post("/verifyemail", {
        code,
      });
      if (res.data.success) {
        alert("Email Verified");
        navigate("/login");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Verification failed");
    }
  };

  return (
    <div className="flex flex-col  items-center rounded-2xl bg-white w-100 h-76 px-5">
      <h1 className="justify-center text-4xl font-bold mt-10">Enter OTP</h1>
      <form onSubmit={handleVerify} className="px-10" action="">
        <input
          onChange={(e) => {
            setCode(e.target.value);
          }}
          className="mt-10 px-17  border-2 border-gray-400 h-10 w-70  rounded-[5px] hover:border-cyan-800 "
          type="text"
          placeholder="Enter OTP Here . . . . . . . "
        />
        <button className="bg-blue-200  w-70 h-10  text-xl font-semibold uppercase rounded-[5px] mt-10 hover:cursor-pointer active:scale-95 active:bg-amber-100">
          Verify
        </button>
      </form>
    </div>
  );
};

export default Verify;
