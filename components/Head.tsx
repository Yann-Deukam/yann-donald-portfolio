import React from "react";

const Head = () => {
  return (
    <div className="relative">
      <div className="hidden sm:block fixed top-0 left-0 right-0 bg-neutral-900/80 backdrop-blur-md p-2 z-50">
        <div className="flex items-center justify-center">
          <span className="text-[8px] text-[#fff9e3] md:text-[10px] lg:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, et.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Head;
