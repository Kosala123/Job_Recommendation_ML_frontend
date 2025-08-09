import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlusCircle, FaBriefcase, FaSignOutAlt } from "react-icons/fa"; // Icons

const RightSide = () => {
  return (
    <div className="w-[250px] bg-gray-100 h-full p-2 border-r border-gray-300">
      <h2 className="text-3xl font-bold mb-10 mt-3 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Skill Bridge
      </h2>

      <div className="flex flex-col gap-10">
        <NavLink
          to={"/dashbord/addqualification"}
          className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded transition mt-12"
        >
          <FaPlusCircle className="ml-1"/>
          Add Qualifications
        </NavLink>

        <NavLink
          to={"/dashbord/addjobpost"}
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium py-3 mt-5 px-6 rounded transition"
        >
          <FaBriefcase />
          Post Job Vacancies
        </NavLink>

        <NavLink
          // to={"/logout"}
          className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-medium py-3 mt-5 px-6 rounded transition"
        >
          <FaSignOutAlt />
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default RightSide;
