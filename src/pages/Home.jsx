import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmM5NGE0NmMwNjEzNjIzMzIxZGQwNDRkYTkwMjJmMSIsInN1YiI6IjY0YTU4MmM0NWE5OTE1MDEwMDdkOTg1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YIGlpwnakkZ2I_utJd0v0dhfoT-Q_B1mlJiAIESWmm0'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Top Rated Movies</h1>
      <Slider
        slidesToShow={4}
        infinite={true}
        // nextArrow={<NextArrow />}
        // prevArrow={<PrevArrow />}
        className="my-4"
      >
        {movies.map(movie => (
          <div key={movie.id} className="px-2">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
  
        }

export default Home;