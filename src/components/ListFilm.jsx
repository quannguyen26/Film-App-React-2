import React, { useState } from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ListFilm = ({
  title,
  dataFilm,
  modalStatus,
  setModalStatus,
  onClickKeyVideo,
}) => {
  const handlePosterClick = async (movie_id) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(movie_id);
      console.log(data);
      onClickKeyVideo(data.results[0].key);
      setModalStatus(true);
    } catch (error) {
      console.log(error);
    }
  };
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
                className="relative mt-5 mr-2 flex h-87 w-58 cursor-pointer justify-center transition-all duration-300 ease-out hover:-translate-y-3"
                onClick={() => handlePosterClick(data.id)}
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
