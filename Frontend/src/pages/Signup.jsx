import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api.js";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/signup", {
        name,
        email,
        password,
      });
      localStorage.setItem("email", email);
      alert(res.data.message);
      navigate("/verifyemail");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col  items-center rounded-2xl bg-white w-100 h-96">
      <h1 className="justify-center text-4xl font-bold mt-10">SignUp</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 justify-around w-full p-8 "
      >
        <div className="border-b-[1px] flex items-center  gap-8 border-gray-400 w-85 ">
          <label htmlFor="" className="font-bold text-gray-600">
            Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="rounded-[5px] w-[20rem] h-[2rem] px-2  focus:outline-none  "
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="border-b-[1px] flex items-center  gap-9 border-gray-400 w-85 ">
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
        <div className="border-b-[1px] flex items-center  gap-2 border-gray-400 w-85 ">
          <label htmlFor="" className="font-bold text-gray-600">
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="rounded-[5px] w-[20rem] h-[2rem] px-2  focus:outline-none  "
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <button className="bg-blue-200 h-10 text-xl font-semibold uppercase rounded-[5px] mt-5 hover:cursor-pointer active:scale-95 active:bg-amber-100">
          signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
