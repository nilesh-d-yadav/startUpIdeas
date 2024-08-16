import React from "react";
import reactSVG from "/public/vite.svg";
import { Navigate, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center shadow-lg p-4 border rounded-lg">
      <button
        className="btn btn-primary btn-sm md:btn-md "
        onClick={() => navigate("/new")}
      >
        +New Idea
      </button>
      <h2 className="font-bold text-sm md:text-2xl ">Top 20 Ideas</h2>
      <div className="flex flex-row gap-3 items-center">
        <img src={reactSVG} alt="" className="w-10 h-10 rounded-full" />
        <h2 className="font-bold text-sm hidden md:block">
          by <br /> Nilesh Yadav
        </h2>
        <button
          className="btn btn-secondary btn-sm md:btn-md text-sm"
          onClick={() => navigate("/about")}
        >
          About
        </button>
      </div>
    </div>
  );
}

export default Header;
