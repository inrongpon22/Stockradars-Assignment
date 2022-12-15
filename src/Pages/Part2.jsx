import React, { useState } from "react";
import { NavLink } from "react-router-dom";
/// components
import RegisterForm from "../Components/RegisterForm";

const Part2 = () => {
  return (
    <>
      <div className="w-full flex flex-col place-items-center h-screen text-white bg-gray-50 dark:bg-gray-900">
        <div>
          <h1 className="text-5xl m-5">Part 2</h1>
          <NavLink to="/" className="self-start text-xl m-2">
            <span>&larr; Go to part 1</span>
          </NavLink>
        </div>
        <RegisterForm />
      </div>
    </>
  );
};

export default Part2;
