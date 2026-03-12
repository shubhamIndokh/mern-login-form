import React, { useEffect, useState } from "react";
import API from "../api.js";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      const res = await API.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    };
    fetchProfile();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col  items-center rounded-2xl bg-white w-100 h-76 px-5">
      <h1 className="justify-center text-4xl font-bold mt-10">Profile Page</h1>
      {user && (
        <div className="mt-5 ">
          Name :
          <h2 className="uppercase font-bold hover:scale-95 hover:text-amber-700 hover:cursor-pointer">
            {user.name}
          </h2>
          Email:
          <h2 className="uppercase font-bold  hover:scale-95 hover:text-amber-700 hover:cursor-pointer">
            {user.email}
          </h2>
          <button
            onClick={logout}
            className="w-70 bg-blue-200 h-10 text-xl font-semibold uppercase rounded-[5px] mt-5 hover:cursor-pointer active:scale-95 active:bg-red-400"
          >
            Log-Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
