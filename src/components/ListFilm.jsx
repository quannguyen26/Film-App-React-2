import React, { useState } from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1439, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1023, min: 768 },
    items: 3,
  },
  landscape: {
    breakpoint: { max: 767, min: 539 },
    items: 2,
  },
  mobile:{
    breakpoint: { max: 538, min: 0 },
    items: 1,
  },
};

const ListFilm = ({ title, dataFilm, modalStatus, onPosterClick }) => {

  return (
    <div className="my-container bg-black pt-5">
      <h2 className="font-bold uppercase">{title}</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="flex items-center"
        arrows={!modalStatus}
      >
        {dataFilm.length > 0 &&
          dataFilm.map((data) => {
            return (
              <div
                key={data.id}
                className="relative mt-5 mr-2 flex aspect-2/3 w-58 cursor-pointer justify-center transition-all duration-300 ease-out hover:-translate-y-3"
                onClick={() => onPosterClick(data.id)}
              >
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${data.poster_path}`}
                  alt="pic-film"
                  className="absolute top-0 h-full w-full"
                />
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-30"></div>
                <p className="text-md absolute bottom-4 text-center font-medium uppercase">
                  {data.title ?? data.name}
                </p>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default ListFilm;
