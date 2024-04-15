import React from "react";
// import Servicecards from "./Servicecards";
import Servicecards from "../components/Servicecards";
import { Carddata } from "./MapData";

const Services = () => {
  return (
    <>
      <div className="bg-[#040403] py-16">
        <div className="container xl:max-w-[1320px] px-3 mx-auto">
          <div className="flex flex-row flex-wrap justify-center gap-6">
            {Carddata.map((e) => (
              <Servicecards
                key={e.id}
                svg={e.svg}
                heading={e.heading}
                content={e.content}
                width={e.width}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
