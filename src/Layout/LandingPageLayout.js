import React from "react";
import Navbar from "../Components/Navbar";

function LandingPageLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">{children}</div>
    </>
  );
}

export default LandingPageLayout;
