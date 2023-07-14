import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";
import {
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchReviewMovie,
} from "../api/movieApi";

jest.mock("../api/movieApi");

describe("Home component", () => {
  beforeEach(() => {
    fetchTopRatedMovies.mockResolvedValue([
      {
        id: 1,
        poster_path: "/path/to/poster1.jpg",
        title: "Movie 1",
      },
      {
        id: 2,
        poster_path: "/path/to/poster2.jpg",
        title: "Movie 2",
      },
    ]);

    fetchPopularMovies.mockResolvedValue([
      {
        id: 1,
        poster_path: "/path/to/poster1.jpg",
        title: "Movie 1",
      },
    ]);

    fetchReviewMovie.mockResolvedValue([
      {
        author: "Author 1",
        content: "Lorem ipsum dolor sit amet",
      },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders home component with movie data", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      const startButton = screen.getByText("Start");
      expect(startButton).toBeInTheDocument();

      const topRatedMovies = screen.getAllByAltText(/Movie \d/);
      expect(topRatedMovies.length).toBe(2);

      const popularReviews = screen.getByText(/POPULAR REVIEWS/);
      expect(popularReviews).toBeInTheDocument();
    });
  });
});
