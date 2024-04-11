import React from "react";
import { useState } from "react";
import { Navdata } from "./MapData";
import Commonbutton from "./Commonbutton";
import Hamburger from "hamburger-react";

const Header = () => {
  const [nav, setNav] = useState(false);
  if (nav === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <>
      <div className="container xl:max-w-[1320px] mx-auto px-3">
        <nav className="flex items-center justify-between py-4">
          <a className="font-bold text-sm leading-[150%] text-cyan-600" href="">
            Logo
          </a>
          <ul
            className={`${
              nav ? "left-0 " : "left-[-100%]"
            } flex max-lg:fixed max-lg:top-0 max-lg:bg-[#ffffff] max-lg:h-full max-lg:w-full max-lg:z-50 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-6 items-center justify-center`}
          >
            {Navdata.map((item, index) => {
              return (
                <li key={index}>
                  <a className="text-black text-xs font-medium" href="#">
                    {item.link}
                  </a>
                </li>
              );
            })}
            <li className="lg:hidden block">
              {" "}
              <Commonbutton btnname="Sign up" />
            </li>
          </ul>
          <div className="lg:block hidden">
            <Commonbutton btnname="Sign up" />
          </div>
          <div className="lg:hidden relative z-50">
            <Hamburger
              toggled={nav}
              toggle={setNav}
              size={25}
              color="#7F04E3"
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
