import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex flex-row justify-center border rounded-md place-content-evenly mb-4'>
        <div className="flex space-x-4 flex-row place-content-evenly m-2  ">
        {/* Active and Inactive styles */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold border-b-2 border-blue-500 "
              : "text-gray-300 hover:text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/paste"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold border-b-2 border-blue-500"
              : "text-gray-300 hover:text-white"
          }
        >
          PasteList
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
