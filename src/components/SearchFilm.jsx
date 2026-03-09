import React from "react";

const SearchFilm = ({ dataSearch }) => {
  return (
    <div className="my-container bg-black pt-5">
      <h2 className="mb-4 font-bold uppercase">Search Results</h2>
      <div className="grid grid-cols-5 gap-4">
        {dataSearch.length > 0 &&
          dataSearch.map((data) => {
            return (
              <div
                key={data.id}
                className="relative mt-5 mr-2 flex h-87 w-58 cursor-pointer justify-center transition-all duration-300 ease-out hover:-translate-y-3"
              >
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${data.poster_path}`}
                  alt="pic-film"
                  className="absolute top-0 h-full w-full"
                />
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-30"></div>
                <p className="text-md absolute bottom-4 text-center font-medium uppercase">
                  {data.title ?? data.original_title}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchFilm;
