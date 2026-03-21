import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../api.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("login success");
      navigate("/profile");
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] z-50">
          <div className="spinner"></div>
        </div>
      )}
      <div className="flex flex-col  items-center rounded-2xl bg-white w-100 h-96">
        <h1 className="justify-center text-4xl font-bold mt-10">Login</h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-5 justify-around w-full p-8 "
        >
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
          <button
            disabled={loading}
            className="bg-blue-200 h-10 text-xl font-semibold uppercase rounded-[5px] mt-7 hover:cursor-pointer active:scale-95 active:bg-amber-100"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <Link to={"/forgetpassword"}>
          <h2 className="hover:cursor-pointer border-b-[1px] active:scale-95 active:text-amber-600 ">
            Forget Password
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Login;
