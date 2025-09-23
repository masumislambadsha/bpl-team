import React from "react";

import navImg from "../../assets/logo.png";
import coin from "../../assets/dollar 1.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar flex justify-between items-center content-center md:mt-15 mx-auto">
      <div class="dropdown block md:hidden">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />{" "}
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <div className="flex flex-col gap-10 opacity-70">
            <a href="" className="btn btn-ghost">
              Home
            </a>
            <a href="" className="btn btn-ghost">
              Fixture
            </a>
            <a href="" className="btn btn-ghost">
              Teams
            </a>
            <a href="" className="btn btn-ghost">
              Schedules
            </a>
          </div>
          <div className="flex gap-2 font-bold mx-auto mt-[30px]">
            <span>{availableBalance}</span>
            <span>Coin</span>
            <span>
              <img src={coin} alt="" />
            </span>
          </div>
        </ul>
      </div>
      <div className="">
        <a className="text-xl">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="md:flex gap-10 items-center hidden">
        <div className="flex gap-10 opacity-70">
          <a href="" className="btn btn-ghost">
            Home
          </a>
          <a href="" className="btn btn-ghost">
            Fixture
          </a>
          <a href="" className="btn btn-ghost">
            Teams
          </a>
          <a href="" className="btn btn-ghost">
            Schedules
          </a>
        </div>
        <div className="flex gap-2 font-bold">
          <span>{availableBalance}</span>
          <span>Coin</span>
          <span>
            <img src={coin} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
