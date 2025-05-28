import { AiOutlineUserAdd } from "react-icons/ai"; 
import { BiErrorAlt } from "react-icons/bi"; 
import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineOrderedList } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

export default function ListMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
  return (
    <div id="sidebar-menu" className="mt-10">
      {/* List Menu */}
      <ul id="menu-list" className="space-y-3">
        <li>
          <NavLink
            id="menu-1"
            to="/"
            className={menuClass}
            >
            <MdDashboard className="mr-4 text-xl"/>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-2"
            to="/orders"
            className={menuClass}
          >
            <AiOutlineOrderedList className="mr-4 text-xl"/>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-3"
            to="/customers"
            className={menuClass}
          >
            <RiCustomerService2Fill className="mr-4 text-xl"/>
            Customers
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-3"
            to="/users"
            className={menuClass}
          >
            <AiOutlineUserAdd className="mr-4 text-xl"/>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-4"
            to="/error400"
            className={menuClass}
          >
            <BiErrorAlt className="mr-4 text-xl"/>
            Error400
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-5"
            to="/error401"
            className={menuClass}
          >
            <BiErrorAlt className="mr-4 text-xl"/>
            Error401
          </NavLink>
        </li>
        <li>
          <NavLink
            id="menu-6"
            to="/error403"
            className={menuClass}
          >
            <BiErrorAlt className="mr-4 text-xl"/>
            Error403
          </NavLink>
        </li>
      </ul>
    </div>
  );
}