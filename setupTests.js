import "@testing-library/jest-dom";
jest.mock("./src/api/movieApi.js", () => ({
  fetchTopRatedMovies: jest.fn(),
  fetchPopularMovies: jest.fn(),
  fetchReviewMovie: jest.fn(),
  fetchGenreMovie: jest.fn(),
}));