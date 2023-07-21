import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test('renderiza correctamente la imagen y el título', () => {
  // Renderiza el componente
  render(<Footer/>);

  // Busca la imagen en el DOM
  const pElement = screen.getByRole('footer-text');
  expect(pElement).toBeInTheDocument();
  expect(pElement).toHaveTextContent('© Cinephiles Limited. Made by lalailamas. Film data from The Movie Database API V3');
});
