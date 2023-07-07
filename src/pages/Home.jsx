import { useState, useEffect } from 'react';


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
    
    <div className="container ml-96 mt-10"> 
      <h1 className="text-2xl font-bold text-white">POPULAR FILMS THIS WEEK</h1>
      <div className="flex overflow-x-scroll">
        {movies.map(movie => (
          <div key={movie.id} className="flex-none w-48 mr-2">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-lg border border-custom-light-yellow"
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
}

export default Home;
