import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// components
import UserData from "../Components/UserData";

const Part1 = () => {
  return (
    <div className="w-full flex flex-col place-items-center text-white bg-gray-900">
      <div>
        <h1 className="text-5xl m-5">Part 1</h1>
        <NavLink to="/part2" className="self-end text-xl m-5">
          <span>Go to part 2 &rarr;</span>
        </NavLink>
      </div>
      <UserData />
    </div>
  );
};

export default Part1;
