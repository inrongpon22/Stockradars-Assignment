import React from "react";
import { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const RegisterForm = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [email, setEmail] = useState();
  const [ref, setRef] = useState();

  // send params
  const navigate = useNavigate();
  const params = {
    ref: ref,
    fname: fname,
    lname: lname,
    phoneNum: phoneNum,
    email: email,
  };
  const RegistSubmit = (e) => {
    e.preventDefault();
    const letters = /[a-z]/gi;
    if (fname == null || fname.legth < 2) {
      alert("Please insert your first name");
    } else if (lname == null) {
      alert("Please insert your last name");
    } else if (phoneNum == null || phoneNum.length < 10) {
      alert("Please insert your phone numbers");
    } else if (email == null) {
      alert("Please insert your email");
    } else if (ref == null) {
      alert("Please insert your ref");
    } else {
      navigate({
        pathname: "/part2/registsuccess",
        search: `?${createSearchParams(params)}`,
      });
    }
  };

  return (
    <>
      <section className="w-full bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-autolg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register form
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="flex">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required=""
                      onInput={(e) => setFname(e.target.value)}
                    />
                  </div>
                  <div className="ml-5">
                    <label
                      htmlFor="lastname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      required=""
                      onInput={(e) => setLname(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phonenumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    name="phonenumber"
                    id="phonenumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0812345678"
                    required=""
                    onInput={(e) => setPhoneNum(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@siamsquared.com"
                    required=""
                    onInput={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    REF
                  </label>
                  <input
                    type="ref"
                    name="ref"
                    id="ref"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="stockradars"
                    required=""
                    onInput={(e) => setRef(e.target.value)}
                  />
                </div>
                <button
                  onClick={(e) => RegistSubmit(e)}
                  type="submit"
                  className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
