import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
 

  const navigate = useNavigate();
  const handleForget = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/forgetpassword", {
        email,
      });

      alert(res.data.message);
      navigate("/resetpassword");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="flex flex-col  items-center rounded-2xl bg-white w-100 h-76 px-5">
      <h1 className="justify-center text-4xl font-bold mt-10">Enter Email</h1>
      <form onSubmit={handleForget} className="px-10" action="">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="mt-10 px-10  border-2 border-gray-400 h-10 w-70  rounded-[5px] hover:border-cyan-800 "
          type="text"
          placeholder="Enter email Here . . . . . . . "
        />
        <button className="bg-blue-200  w-70 h-10  text-xl font-semibold uppercase rounded-[5px] mt-10 hover:cursor-pointer active:scale-95 active:bg-amber-100">
          Verify
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
