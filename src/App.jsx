import { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ListFilm from "./components/ListFilm";
import Footer from "./components/Footer";
import Modal from "react-modal";
import YouTube from "react-youtube";
import SearchFilm from "./components/SearchFilm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    origin: window.location.origin, // Tự động lấy http://localhost:5173
    enablejsapi: 1,
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

function App() {
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRate, setTopRate] = useState([]);
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [keyVideo, setKeyVideo] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchApiData = async () => {
    try {
      const url = [
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        "https://api.themoviedb.org/3/movie/popular",
        "https://api.themoviedb.org/3/movie/top_rated",
      ];

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const fetchPromises = url.map((url) =>
        fetch(url, options).then((response) => {
          if (!response.ok) {
            console.log("Error: ", response.status);
            return;
          }
          return response.json();
        }),
      );

      const responses = await Promise.all(fetchPromises);

      const [data1, data2, data3] = responses;
      setUpcoming(data1.results);
      setPopular(data2.results);
      setTopRate(data3.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickSearch = async (text) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=en-US&page=1`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.log(error);
    }
  };

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
      setKeyVideo(data.results[0].key);
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);
  return (
    <div className="text-white">
      <Header onClickSearch={handleClickSearch}></Header>
      <Banner upcomingFilm={upcoming}></Banner>
      {searchResults.length > 0 ? (
        <SearchFilm
          dataSearch={searchResults}
          onPosterClick={handlePosterClick}
        ></SearchFilm>
      ) : (
        <>
          <ListFilm
            title="Popular"
            dataFilm={popular}
            modalStatus={modalIsOpen}
            onPosterClick={handlePosterClick}
          ></ListFilm>
          <ListFilm
            title="Top Rate"
            dataFilm={topRate}
            modalStatus={modalIsOpen}
            onPosterClick={handlePosterClick}
          ></ListFilm>
        </>
      )}
      <Footer></Footer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
          setKeyVideo("");
        }}
        style={customStyles}
        ariaHideApp={false}
      >
        <YouTube videoId={keyVideo} opts={opts} />
      </Modal>
    </div>
  );
}

export default App;
