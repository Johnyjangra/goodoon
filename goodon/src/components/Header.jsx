import React from "react";
import Arrow from "../assets/images/arrow.png";

const Header = () => {
  return (
    <div className="text-center position-relative z-2">
      <h1 className="ff_babe fs_lg text-white max-831 text-center mx-auto pt-5 mb-0 mx_sm_500 mx_md_700 mx_md_690 max_xxl_690 max-280 ">
        Elevate Your Brands to New Heights through the Power of
      </h1>
      <h1 className="ff_babe fs_lg text-center text-transparent position-relative after_line">
        Digital Advertising
      </h1>
      <div className="head-button m-auto px-3 py-2 mt-4 curser-pointer">
        <button className="bg-transparent ff_pop fs_xsm text-white border-0">
          BOOK FREE CONSULTATION
        </button>
        <img className="arrowiimg-size ms-2" src={Arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Header;
