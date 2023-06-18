import logo from "../assets/Logo.svg";
import React, { useState } from "react";
import ButtonLight, {
  ButtonLightSmall,
  ButtonPrimarySmall,
} from "./Common/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { HiArrowLongRight } from "react-icons/hi2";
import Sidebar from "./Sidebar";

function Navbar() {
  const [banner, setBanner] = useState(true);

  return (
    <>
      {banner ? (
        <div className="hidden w-full md:flex items-center justify-between px-8 h-11 bg-[#CCE8C9] fixed z-50">
          <div></div>
          <div className="flex gap-1 font-medium text-sm text-[#1B4B4B]">
            <h5>
              <span className="font-bold">Announcing our Series A</span> — Finzo
              raises $40m for better environment.{" "}
            </h5>
            <a href="#" className="flex items-center underline">
              Learn More <HiArrowLongRight className="text-xl ml-1" />
            </a>
          </div>
          <IoMdClose
            className="cursor-pointer"
            onClick={() => setBanner(false)}
          />
        </div>
      ) : null}
      <div
        className={`w-full h-24 bg-white border border-b-border fixed z-40 ${
          banner ? "md:top-11" : ""
        }`}
      >
        <div className="container h-full">
          <div className="flex justify-between items-center h-full">
            <div className="drawer block lg:hidden">
              <input id="sidebar" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="sidebar">
                  <RxHamburgerMenu className="text-3xl" />
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="sidebar" className="drawer-overlay"></label>
                <Sidebar />
              </div>
            </div>
            <div className="hidden lg:flex items-center">
              <img src={logo} className="w-[127px] h-[44px] mr-20" />
              <ul className="flex flex-row">
                <li className="btn btn-ghost text-base font-normal capitalize">
                  Personal
                </li>
                <li className="btn btn-ghost text-base font-normal capitalize">
                  Features
                </li>
                <li className="btn btn-ghost text-base font-normal capitalize">
                  Pricing
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              <div className="hidden lg:block mr-10">EN</div>
              <div className="flex gap-3">
                <ButtonLightSmall text="Login" />
                <ButtonPrimarySmall text="Sign Up" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
