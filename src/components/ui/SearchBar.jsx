import React from "react";
import { useRef } from "react";

const SearchBar = ({ className, onClickSearch }) => {
  const inputRef = useRef(null);

  return (
    <div className={className}>
      <input
        type="text"
        className="bg-white px-1 py-2 text-gray-400"
        placeholder="Search"
        ref={inputRef}
      />
      <button
        className="ml-4 cursor-pointer rounded-md bg-red-600 px-2 py-1 transition-opacity duration-300 ease-in-out hover:opacity-80"
        onClick={() => onClickSearch(inputRef.current.value)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
