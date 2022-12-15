import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const RegisterSuccess = () => {
  const [searchParams] = useSearchParams();

  return (
    <>
      <section className="w-full bg-gray-900">
        <div className="h-screen flex flex-col items-center justify-center px-6 py-8 mx-autolg:py-0">
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Register Successful
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <h3 className="text-[#F2F7A1] text-xl font-semibold ml-5">
                    {searchParams.get("fname")}
                  </h3>
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <h3 className="text-[#F2F7A1] text-xl font-semibold ml-5">
                    {searchParams.get("lname")}
                  </h3>
                </div>
                <div>
                  <label
                    htmlFor="phonenumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <h3 className="text-[#F2F7A1] text-xl font-semibold ml-5">
                    {searchParams.get("phoneNum")}
                  </h3>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <h3 className="text-[#F2F7A1] text-xl font-semibold ml-5">
                    {searchParams.get("email")}
                  </h3>
                </div>
                <div>
                  <label
                    htmlFor="ref"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    REF
                  </label>
                  <h3 className="text-[#F2F7A1] text-xl font-semibold ml-5">
                    {searchParams.get("ref")}
                  </h3>
                </div>
              </form>
            </div>
          </div>
          <NavLink to="/part2" className="text-sky-500 hover:text-sky-300 mt-5">
            &larr; Back to register page
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default RegisterSuccess;
