import React from "react";
import Slider from "react-slick";
import { slidedata } from "./MapData";

const Trusted = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 473,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[#040403]">
        <div className="w-full mx-auto xl:max-w-[1240px] xl:px-5 lg:pt-12">
          <div className="pt-10">
            <h4 className="text-xs font-normal text-[#EAECF0] pb-8 text-center leading-[120%]">
              Trusted by 4,000+ companies
            </h4>
            <div className="pb-14">
              <Slider {...settings}>
                {slidedata.map((slides, e) => {
                  return (
                    <div key={e} className="px-6">
                      <a
                        href={slides.link}
                        target="blank"
                        className="flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 ease-linear"
                      >
                        <img src={slides.Image} alt="sliderimg" />
                      </a>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
