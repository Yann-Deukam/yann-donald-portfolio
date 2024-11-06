import React from "react";

export default function Navbar() {
  return (
    <header className="z-[999] relative">
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/5 backdrop-blur-md
        sm:top-10 sm:h-[2.75rem] sm:w-[36rem] sm:rounded-full
      "
      ></div>
    </header>
  );
}
