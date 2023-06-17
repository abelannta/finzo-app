import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function LandingPageLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  );
}

export default LandingPageLayout;
