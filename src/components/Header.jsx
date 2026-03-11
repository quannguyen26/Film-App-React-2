import React, { useState } from "react";
import icon_hamberger from "./../assets/icon-hamburger.svg";
import icon_close from "./../assets/icon-close.svg";
import SearchBar from "./ui/SearchBar";

const Header = ({ onClickSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-container relative flex items-center justify-between border-b border-amber-50 bg-black py-4">
      <div className="flex space-x-5">
        <h1 className="text-4xl font-bold text-red-600 uppercase">movie</h1>
        <nav className="hidden items-center space-x-4 font-medium capitalize sm:flex">
          <a href="/" className="hover:text-red-600">
            home
          </a>
          <a href="#" className="hover:text-red-600">
            about
          </a>
          <a href="#" className="hover:text-red-600">
            contact
          </a>
        </nav>
      </div>

      <SearchBar className={"hidden sm:block"} onClickSearch={onClickSearch} />
      <div className="sm:hidden">
        {isOpen ? (
          <img
            className="h-6 w-7 cursor-pointer brightness-0 invert"
            src={icon_close}
            alt="icon_close"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <img
            className="h-5 w-7 cursor-pointer brightness-0 invert"
            src={icon_hamberger}
            alt="icon_hamberger"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      <div
        className={`xs:left-1/2 xs:w-[85%] xs:-translate-x-1/2 absolute top-full left-0 z-50 flex w-full flex-col items-center gap-4 bg-black p-3 opacity-90 transition-all duration-300 sm:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col items-center space-y-4 font-medium capitalize">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </nav>
        <SearchBar className={"block"} onClickSearch={onClickSearch} />
      </div>
    </div>
  );
};

export default Header;
