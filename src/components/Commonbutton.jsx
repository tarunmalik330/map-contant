import React from "react";

const Commonbutton = (props) => {
  return (
    <div>
      <button className="bg-btn-gradient border-none py-[14px] px-[24px] text-white leading-[150%] font-semibold text-xs rounded-[12px]">
        {props.btnname}
      </button>
    </div>
  );
};

export default Commonbutton;
