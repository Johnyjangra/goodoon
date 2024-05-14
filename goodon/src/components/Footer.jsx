import React from "react";
import Adidas from "../assets/images/addidas 1.svg";
import Amazon from "../assets/images/amazon 1.svg";
import Forbes from "../assets/images/forbes 1.svg";
import Jnj from "../assets/images/jnj 1.svg";
import Meta from "../assets/images/meta 1.svg";
import Nasa from "../assets/images/nasa 1.svg";
import Tiktok from "../assets/images/tiktok 1.svg";
import Wet from "../assets/images/wetransfer 1.svg";

const Footer = () => {
  return (
    <div className="py-5 mt-5">
      <div className="my-container pt-lg-5 mt-lg-5">
        <div className="d-flex justify-content-between pb-2 flex-xl-row flex-column pt-lg-5 ">
          <div className="w_40p w_xl_100 text-xl-start text-center">
            <h2 className="ff_babe fs_md text-white after-green-line position-relative d-inline">
              Our Clients
            </h2>
            <p className="ff_pop fs_sm text-white pe-xl-5 pt-xl-4 pt-2 mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="w_50 w_xl_100 border_btm position-relative pb-5 pt-xl-0 pt-5">
            <div className="w-100 d-flex align-items-center justify-content-between">
              <div className="w_25">
                <img
                  className="wid_150 w_xl_130 w_sm_70 w_md_95 w_md_120"
                  src={Adidas}
                  alt="adidas"
                />
              </div>
              <div className="w_25">
                <img
                  className="wid_150 w_xl_130 w_sm_70 w_md_95 w_md_120"
                  src={Amazon}
                  alt="amazon"
                />
              </div>
              <div className="w_25">
                <img
                  className="wid_150 w_xl_130 w_sm_70 w_md_95 w_md_120"
                  src={Forbes}
                  alt="forbase"
                />
              </div>
              <div className="w_25">
                <img
                  className="wid_150 w_xl_130 w_sm_70 w_md_95 w_md_120"
                  src={Nasa}
                  alt="nasa"
                />
              </div>
            </div>
            <div className="w-100 d-flex align-items-center justify-content-between pt-5 mt-xl-4">
              <div className="w_25">
                <img
                  className="wid_150 w_xl_130 w_sm_70 w_md_95 w_md_120"
                  src={Jnj}
                  alt="jpic"
                />
              </div>
              <div className="w_25">
                <img
                  className="wid_15 w_xl_130 w_sm_70 w_md_95 w_md_120"
                  src={Meta}
                  alt="meta"
                />
              </div>
              <div className="w_25">
                <img
                  className="wid_150 w_xl_130 w_sm_70 w_md_95 w_md_120"
                  src={Wet}
                  alt="wet"
                />
              </div>
              <div className="w_25">
                <img
                  className="wid_150 w_xl_130 w_sm_70 w_md_95 w_md_120"
                  src={Tiktok}
                  alt="tiktok"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
