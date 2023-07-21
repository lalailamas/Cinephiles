import { getHttp } from "./utils";

export const fetchTopRatedMovies = async () => {
  try {
    const response = await getHttp(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
    );
    return response.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await getHttp(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    );
    return response.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchReviewMovie = async (id) => {
  try {
    const response = await getHttp(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`
    );
    return response.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchSearchMovie = async (searchTerm) => {
  try {
    const response = await getHttp(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`
    );
    return response.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchDetailsMovie = async (id) => {
  try {
    const response = await getHttp(
      `https://api.themoviedb.org/3/movie/${id}`
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchGenreMovie = async () => {
  try {
    const response = await getHttp(
      `https://api.themoviedb.org/3/genre/movie/list?language=en-US`
    );
    return response.genres;
    } catch (error) {
      console.error(error);
      return [];
    }
}

export const fetchMoviesByGenre = async (genreId) => {
  try {
    const response = await getHttp(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`
    );
    return response.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}