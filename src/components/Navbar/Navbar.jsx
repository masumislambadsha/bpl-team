import React from "react";

import navImg from "../../assets/logo.png";
import coin from "../../assets/dollar 1.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar flex justify-between items-center content-center md:mt-15 mx-auto">
      {/* Mobile dropdown */}
      <div className="dropdown block md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow
                     bg-white/30 backdrop-blur-sm"
        >
          <div className="flex text-start flex-col gap-1 md:gap-10 opacity-70">
            <a href="#" className="btn btn-ghost">
              Home
            </a>
            <a href="#" className="btn btn-ghost">
              Fixture
            </a>
            <a href="#" className="btn btn-ghost">
              Teams
            </a>
            <a href="#" className="btn btn-ghost">
              Schedules
            </a>
          </div>
          <div className="flex gap-2 font-bold mx-auto mt-[30px]">
            <span>{availableBalance}</span>
            <span>Coin</span>
            <span>
              <img src={coin} alt="coin" />
            </span>
          </div>
        </ul>
      </div>

      {/* Logo */}
      <div>
        <a className="text-xl">
          <img className="w-[60px] h-[60px]" src={navImg} alt="logo" />
        </a>
      </div>

      {/* Desktop nav */}
      <div className="md:flex gap-3 md:gap-10 items-center hidden">
        <div className="flex gap-3 md:gap-10 opacity-70">
          <a href="#" className="btn btn-ghost">
            Home
          </a>
          <a href="#" className="btn btn-ghost">
            Fixture
          </a>
          <a href="#" className="btn btn-ghost">
            Teams
          </a>
          <a href="#" className="btn btn-ghost">
            Schedules
          </a>
        </div>
        <div className="flex gap-2 font-bold">
          <span>{availableBalance}</span>
          <span>Coin</span>
          <span>
            <img src={coin} alt="coin" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
