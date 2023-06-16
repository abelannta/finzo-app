import logo from "../Logo.svg";
import React from "react";
import ButtonLight, { ButtonLightSmall, ButtonPrimarySmall } from "./Button";

function Navbar() {
  return (
    <div className="w-full h-24 border border-b-border">
      <div className="container h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <img src={logo} className="w-[127px] h-[44px] mr-20" />
            <ul className="flex flex-row gap-14">
              <li>Personal</li>
              <li>Features</li>
              <li>Pricing</li>
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
