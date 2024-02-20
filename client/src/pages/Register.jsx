import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className=" register_container p-3 max-w-md mx-auto">
      <h1 className="text-white text-3xl text-center font-semibold my-5">
        Fill your details
      </h1>
      <form className="flex flex-col gap-4 m-4">
        <input
          type="text"
          placeholder="firstName"
          className="border p-2 rounded-lg text-center"
          id="firstName"
        />
        <input
          type="text"
          placeholder="lastName"
          className="border p-2 rounded-lg text-center"
          id="lastName"
        />
        <input
          type="text"
          placeholder="userName"
          className="border p-2 rounded-lg text-center"
          id="userName"
        />
        <input
          type="email"
          placeholder="userName"
          className="border p-2 rounded-lg text-center"
          id="email"
        />
        <input
          type="password"
          placeholder="userName"
          className="border p-2 rounded-lg text-center"
          id="password"
        />
        <button className=" register_btn text-black font-bold rounded-lg uppercase">
          Register
        </button>
      </form>
      <div className="flex  justify-center items-center gap-2 mt-3">
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
          <span className="font-semibold text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
