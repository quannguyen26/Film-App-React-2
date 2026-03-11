import React from "react";
import play_button from "./../assets/play-button.png";
const SearchFilm = ({ dataSearch, onPosterClick }) => {
  return (
    <div className="my-container bg-black pt-5">
      <h2 className="mb-4 font-bold uppercase">Search Results</h2>
      <div className="xs:grid-cols-2 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {dataSearch.map((data) => {
          return (
            <div
              key={data.id}
              className="group relative cursor-pointer overflow-hidden bg-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              onClick={() => onPosterClick(data.id)}
            >
              <div className="aspect-2/3 overflow-hidden">
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${data.poster_path}`}
                  alt={data.title ?? data.original_title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div class="absolute inset-0 flex translate-y-4 items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div class="rounded-full border border-white/30 bg-white/20 p-3 shadow-2xl backdrop-blur-sm">
                  <img
                    src={play_button}
                    alt="play_button"
                    className="size-10"
                  />
                </div>
              </div>

              <div class="absolute right-0 bottom-0 left-0 z-10 translate-y-2 p-4 opacity-0 transition-opacity duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 class="truncate text-lg font-bold text-white">
                  {data.title ?? data.original_title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchFilm;
