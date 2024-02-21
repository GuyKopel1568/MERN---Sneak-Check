import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="p-2 ml-10 bg-transparent shadow-md rounded-3xl mx-auto">
      <div className="flex items-center justify-between max-auto max-w-6xl">
        <Link to="/">
          <h1
            className="font-bold text-white sm:text-lg flex flex-wrap"
            style={{ fontSize: '2rem' }}
          >
            <span className="text-[#a3a3a3]">Sneak</span>
            <span className="text-[#525252]">Check</span>
          </h1>
        </Link>
        <form className="ml-10 p-2 bg-white bg-opacity-30 rounded-xl flex">
          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent focus:outline-none  sm:w-80"
          />
          <FaSearch className="text-white" />
        </form>
        <ul className="flex text-white font-semibold text-lg gap-4">
          <Link to="/">
            <li className=" navlist hidden sm:inline hover:underline  transition duration-300">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="navlist hover:underline transition duration-300">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="navlist hover:underline  transition duration-300">
              Sign-in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
