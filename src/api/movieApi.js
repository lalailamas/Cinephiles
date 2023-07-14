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
}

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
}