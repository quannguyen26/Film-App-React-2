import { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ListFilm from "./components/ListFilm";

function App() {
  const [upcoming, setUpcoming] = useState([]);
  const fetchUpcoming = async () => {
    try {
      const url =
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const request = await fetch(url, options);
      const respon = await request.json();
      setUpcoming(respon.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUpcoming();
  }, []);
  return (
    <div className="text-white">
      <Header></Header>
      <Banner upcomingFilm={upcoming}></Banner>
      <ListFilm title={"Popular"}></ListFilm>
      {/* <ListFilm title={"Top Rate"}></ListFilm> */}
    </div>
  );
}

export default App;
