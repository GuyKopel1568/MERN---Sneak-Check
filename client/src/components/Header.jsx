import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar_container p-2 bg-transparent shadow-md rounded-3xl mx-auto relative">
      <div className="flex items-center justify-between max-auto max-w-6xl">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="font-bold text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              <span className="text-[#a3a3a3]">Sneak</span>
              <span className="text-[#525252]">Check</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <form className="flex p-2 bg-white bg-opacity-30 rounded-xl items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none lg:w-96 sm:w-64"
            />
            <button type="submit" className="focus:outline-none">
              <FaSearch className="text-white" />
            </button>
          </form>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className="font-semibold text-lg text-white hover:underline transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-semibold text-lg text-white hover:underline transition duration-300"
          >
            About
          </Link>
          <Link
            to="/sign-in"
            className="font-semibold text-lg text-white hover:underline transition duration-300"
          >
            Sign-in
          </Link>
        </div>

        <div className="md:hidden ml-4">
          {isOpen ? (
            <FaTimes
              className="text-white text-2xl cursor-pointer"
              onClick={toggleNavbar}
            />
          ) : (
            <FaBars
              className="text-white text-2xl cursor-pointer"
              onClick={toggleNavbar}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="nav_collapse md:hidden absolute inset-x-0  bg-white p-2 shadow-md rounded-3xl">
          <ul className="flex flex-col items-center font-semibold text-lg gap-4">
            <Link
              to="/"
              className="navlist hover:underline transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="navlist hover:underline transition duration-300"
            >
              About
            </Link>
            <Link
              to="/sign-in"
              className="navlist hover:underline transition duration-300"
            >
              Sign-in
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
