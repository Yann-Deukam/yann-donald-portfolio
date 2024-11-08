import React from "react";

const Head = () => {
  return (
    <div className="relative">
      <div className="hidden sm:block fixed top-0 left-0 right-0 bg-violet-800/80 backdrop-blur-md p-2 z-50">
        <div className="flex items-center justify-center">
          <span className="text-[8px] text-[#fff9e3] md:text-[10px] lg:text-xs font-semibold">
            Website version 1.0.0, other awesome features still under
            development
          </span>
        </div>
      </div>
    </div>
  );
};

export default Head;
