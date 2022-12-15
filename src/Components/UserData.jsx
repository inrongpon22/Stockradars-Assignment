import React, { useState, useEffect } from "react";
//components

const ResTable = () => {
  // useState
  const [data, setData] = useState([]);

  // useEffect
  useEffect(() => {
    getData();
  }, []);

  // function
  const getData = async () => {
    let res = await fetch("https://stockradars.co/assignment/data.php");
    let json = await res.json();
    setData(json);
  };

  return (
    <>
      {!data ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-col items-center overflow-x-auto relative shadow-md">
          {data.map((user, index) => (
            <table
              key={index}
              className="w-2/3 text-md text-left text-gray-300 my-14"
            >
              <tbody>
                <tr className="border-b border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-[#F2F7A1] bg-gray-800 whitespace-nowrap rounded-tl-xl"
                  >
                    No
                  </th>
                  <td className="py-4 px-6 rounded-tr-xl">{index + 1}</td>
                </tr>
                <tr className="border-b bg-gray-900 border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-[#F2F7A1] bg-gray-800 whitespace-nowrap"
                  >
                    Name
                  </th>
                  <td className="py-4 px-6">{user.N_name}</td>
                </tr>
                <tr className="border-b bg-gray-900 border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-[#F2F7A1] bg-gray-800 whitespace-nowrap"
                  >
                    Shortname
                  </th>
                  <td className="py-4 px-6">
                    {user.N_shortname == null ? "-" : user.N_shortname}
                  </td>
                </tr>
                <tr className="border-b bg-gray-900 border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-[#F2F7A1] bg-gray-800 whitespace-nowrap"
                  >
                    Marketcap
                  </th>
                  <td className="py-4 px-6">
                    {user.marketcap == null ? "-" : user.marketcap}
                  </td>
                </tr>
                <tr className="border-b bg-gray-900 border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-[#F2F7A1] bg-gray-800 whitespace-nowrap"
                  >
                    COMPANY_T
                  </th>
                  <td className="py-4 px-6">{user.N_COMPANY_T}</td>
                </tr>
                <tr className="border-b bg-gray-900 border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-[#F2F7A1] bg-gray-800 whitespace-nowrap"
                  >
                    COMPANY_E
                  </th>
                  <td className="py-4 px-6">{user.N_COMPANY_E}</td>
                </tr>
                <tr className="border-b bg-gray-900 border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-[#F2F7A1] bg-gray-800 whitespace-nowrap"
                  >
                    URL
                  </th>
                  <td className="py-4 px-6">{user.N_URL}</td>
                </tr>
                <tr className="border-b bg-gray-900 border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-[#F2F7A1] bg-gray-800 whitespace-nowrap"
                  >
                    F_TYPE
                  </th>
                  <td className="py-4 px-6">{user.F_TYPE}</td>
                </tr>
                <tr className="border-b bg-gray-900 border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-[#F2F7A1] bg-gray-800 whitespace-nowrap"
                  >
                    BUSINESS_TYPE_E
                  </th>
                  <td className="py-4 px-6">{user.N_BUSINESS_TYPE_E}</td>
                </tr>
                <tr className="border-b bg-gray-900 border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-[#F2F7A1] bg-gray-800 whitespace-nowrap"
                  >
                    BUSINESS_TYPE_T
                  </th>
                  <td className="py-4 px-6">{user.N_BUSINESS_TYPE_T}</td>
                </tr>
                <tr className="border-b bg-gray-900 border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-[#F2F7A1] bg-gray-800 whitespace-nowrap"
                  >
                    Fullname
                  </th>
                  <td className="py-4 px-6">{user.N_fullname}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )}
    </>
  );
};

export default ResTable;
