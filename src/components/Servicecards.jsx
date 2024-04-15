const Servicecards = (props) => {
  const { width } = props;
  return (
    <div className={`${width} flex`}>
      <div className="bg-[#0E0D0D] shadow-[0px,0px,0px,2px_#F4F4F51A] rounded-[16px] relative hover:bg-gradientbg group hover:border-transparent transition-colors ease-linear duration-500 inline-block cursor-pointer py-[40px] px-[32px]">
        <div className="pb-4 relative z-10">{props.svg}</div>
        <h3 className="text-[#E4E4E7] text-xs font-semibold leading-[120%] pb-4 relative z-10">
          {props.heading}
        </h3>
        <p className="text-lg text-white leading-[120%] relative z-10">
          {props.content}
        </p>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradientbg opacity-0 group-hover:opacity-100 transition-all rounded-[16px] ease-linear duration-500"></div>
      </div>
    </div>
  );
};

export default Servicecards;
