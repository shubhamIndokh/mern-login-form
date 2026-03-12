import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div
        className="bg-white shadow-2xl rounded-3xl 
      w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] 
      p-8 md:p-10 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome 🚀
        </h1>

        <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-8">
          Login or create an account to explore the platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login" className="w-full sm:w-auto">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition font-semibold">
              Login
            </button>
          </Link>

          <Link to="/signup" className="w-full sm:w-auto">
            <button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg transition font-semibold">
              Signup
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
