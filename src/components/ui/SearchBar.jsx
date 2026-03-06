import React from "react";

const SearchBar = ({ className,onStatusSearch }) => {

  return (
    <div className={className}>
      <input
        type="text"
        className="bg-white text-gray-400 px-1 py-2"
        placeholder="Search"
      />
      <button className="bg-red-600 ml-4 rounded-md px-2 py-1 cursor-pointer 
      transition-opacity duration-300 ease-in-out hover:opacity-80"
      onClick={()=>{onStatusSearch(true)} }>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
