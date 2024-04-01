"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdHelp,MdOutlineSupervisorAccount  } from "react-icons/md";

const TopNav = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log(sideNav);
  return (
    <div className="bg-slate-400 mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className=" ms-2 text-2xl sm:text-3xl lg:txt-4xl">
          Num
          <span className="font-bold">Bank</span>
        </h1>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full outline-none"
          type="text"
          placeholder="search"
        />
      </div>
      <button className="text-white hidden md:flex items-center py-2 rounded-full">
        <FaRegUserCircle size={25} />
      </button>
      {sideNav ? (
        <div
          className="bg-black/30 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-slate-400 text-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Num <span className="text-black font-bold">Bank</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex">
              <BsPerson
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              <Link href="/accounts" className="text-white">Accounts</Link>
            </li>
            <li className="text-xl py-4 flex">
              <MdOutlineSupervisorAccount
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              <Link href="/newAccount" className="text-white">New Account</Link>
            </li>
            <li className="text-xl py-4 flex">
              <FaSackDollar
                size={25}
                className="mr-4 text-white bg-black rounded-full"
               />
              <Link href="/new-account" className="text-white">Transaction</Link>
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              <Link href="/new-account" className="text-white">Help</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
