import React from "react";
import logo from "../assets/Logo.svg";

function Sidebar() {
  return (
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      <div className="flex items-center justify-center mb-10">
        <img src={logo} className="w-[127px] h-[44px]" />
      </div>
      <li>
        <a>Personal</a>
      </li>
      <li>
        <a>Features</a>
      </li>
      <li>
        <a>Pricing</a>
      </li>
    </ul>
  );
}

export default Sidebar;
