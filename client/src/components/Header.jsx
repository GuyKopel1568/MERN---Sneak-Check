import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="navbar_container p-2 bg-black bg-opacity-30 shadow-md rounded-3xl mx-auto relative"
      data-aos="fade-down"
    >
      <div className="flex items-center justify-between max-auto max-w-6xl">
        <div className="flex items-center pl-5" data-aos="fade-down">
          <Link to="/">
            <h1
              className="font-bold text-white sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <span className="text-[#a3a3a3]">Sneak</span>
              <span className="text-[#78716c]">Check</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center" data-aos="fade-down">
          <form className="flex p-2 bg-white bg-opacity-30 rounded-xl items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none lg:w-96 sm:w-64"
              data-aos="fade-down"
              data-aos-duration="1000"
            />
            <button type="submit" className="focus:outline-none">
              <FaSearch className="text-white" />
            </button>
          </form>
        </div>

        <div
          className="hidden md:flex items-center space-x-4 "
          data-aos="fade-down"
        >
          <Link
            to="/"
            className="font-semibold text-lg text-white hover:underline transition duration-300 link-shadow"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-semibold text-lg text-white hover:underline transition duration-300 link-shadow"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            About
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <div
                className="flex text-white items-center justify-center gap-1"
                data-aos="fade-down"
                data-aos-duration="2500"
              >
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src={
                    currentUser && currentUser.photo
                      ? currentUser.photo
                      : '/default-profile.jpg'
                  }
                  alt="profile"
                />
                <span>
                  <u>Hello, {currentUser.fullname}</u>
                </span>
              </div>
            ) : (
              <span
                className="font-semibold text-lg text-white hover:underline transition link-shadow"
                data-aos="fade-down"
                data-aos-duration="2500"
              >
                Sign-in
              </span>
            )}
          </Link>
        </div>

        <div
          className="md:hidden ml-4"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
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
        <div
          className="nav_collapse md:hidden absolute inset-x-0 bg-white p-2 shadow-md rounded-3xl"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <ul className="flex flex-col items-center font-semibold text-lg gap-4">
            <Link to="/profile">
              {currentUser ? (
                <div
                  className="flex justify-center items-center gap-1"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <img
                    onClick={() => setIsOpen(false)}
                    className="rounded-full h-12 w-12 object-cover"
                    src={
                      currentUser ? currentUser.photo : '/default-profile.jpg'
                    }
                    alt="profile"
                  />
                  <span
                    onClick={() => setIsOpen(false)}
                    className="ml-2"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    Profile
                  </span>
                </div>
              ) : (
                <li
                  className="font-semibold text-lg hover:underline transition duration-300"
                  data-aos="fade-left"
                  data-aos-duration="2500"
                >
                  Sign-in
                </li>
              )}
            </Link>
            <Link
              to="/"
              className="hover:underline transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:underline transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
