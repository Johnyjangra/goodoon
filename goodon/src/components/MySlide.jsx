import React from "react";
import Slider from "react-slick";
import girlpic from "../assets/images/png/girlp.png";
import Dreamgirl from "../assets/images/png/dreamgirl.png";
import Leptop from "../assets/images/png/leptop.png";
import Mobilepic from "../assets/images/png/mobilepic.png";
import Singer from "../assets/images/png/singer.png";
import Blur from "../assets/images/png/bluriimg.png";
import LeftArrow from "../assets/images/leftarrow.svg";
import Rightarrow from "../assets/images/rightarrow.svg";

const MySlide = () => {
  const button = React.useRef();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "180px",
    responsive: [
      {
        breakpoint: 1692,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1075,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="position-relative pt-5">
      <div className="w-100 ">
        <img
          className="position-absolute blu r_size blur_set"
          src={Blur}
          alt="Blur"
        />
      </div>
      <Slider {...settings} ref={button} className="w-100">
        <div>
          <div className="object1 position-relative">
            <img className=" my_img" src={Leptop} alt="leptop" />
            <div className="blr"></div>
          </div>
        </div>
        <div>
          <div className="object1 position-relative">
            <img className=" my_img " src={Mobilepic} alt="mobile" />
            <div className="blr"></div>
          </div>
        </div>
        <div>
          <div className="object1 position-relative">
            <img className=" my_img " src={girlpic} alt="girl" />
            <div className="blr"></div>
          </div>
        </div>
        <div>
          <div className="object1 position-relative">
            <img className=" my_img " src={Singer} alt="singer" />
            <div className="blr"></div>
          </div>
        </div>
        <div>
          <div className="object1 position-relative">
            <img className=" my_img " src={Dreamgirl} alt="thoughtpic" />
            <div className="blr"></div>
          </div>
        </div>
      </Slider>
      <div className="position-relative">
        <img
          onClick={() => button.current.slickPrev()}
          className="arrow_set1 curser-pointer"
          src={LeftArrow}
          alt="leftbtn"
        />
        <img
          onClick={() => button.current.slickNext()}
          className="arrow_set2 curser-pointer"
          src={Rightarrow}
          alt="rightbtn"
        />
      </div>
    </div>
  );
};

export default MySlide;
