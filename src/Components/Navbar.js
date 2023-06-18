import logo from "../assets/Logo.svg";
import React from "react";
import ButtonLight, {
  ButtonLightSmall,
  ButtonPrimarySmall,
} from "./Common/Button";

function Navbar() {
  return (
    <div className="w-full h-24 bg-white border border-b-border fixed z-50">
      <div className="container h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
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
            <div className="mr-10">EN</div>
            <div className="flex gap-3">
              <ButtonLightSmall text="Login" />
              <ButtonPrimarySmall text="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
