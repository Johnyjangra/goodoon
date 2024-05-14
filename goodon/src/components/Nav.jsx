import React from "react";
import Logo from "../assets/images/logo.svg";

const Nav = () => {
  return (
    <div>
      <div className="my-container pt-4">
        <div className="d-flex justify-content-between align-items-center pt-3">
          <div className="logo-image">
            <img className="w-100 curser-pointer" src={Logo} alt="logo" />
          </div>
          <div className="menu-line curser-pointer">
            <div className="line1 margin-inline-start"></div>
            <div className="line2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
