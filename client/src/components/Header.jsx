import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="p-2 m-3 bg-black shadow-md rounded-3xl ">
      <div className=" flex items-center max-w-3xl justify-between ">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-lg flex flex-wrap">
            <span className="text-slate-500">Sneak</span>
            <span className="text-slate-700">Check</span>
          </h1>
        </Link>
        <form className="p-1 bg-white bg-opacity-30 rounded-xl flex ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-white  " />
        </form>
        <ul className="flex text-white gap-4 ">
          <Link to="/">
            <li className="hidden sm:inline hover:underline ">Home</li>
          </Link>
          <Link to="/about">
            <li className=" hover:underline ">About</li>
          </Link>
          <Link to="/sign-in">
            <li className=" hover:underline ">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
