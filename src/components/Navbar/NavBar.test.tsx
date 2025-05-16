import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "./NavBar";

// Mock do next/image
jest.mock("next/image", () => (props: any) => {
  // simplifica a imagem para um <img> padrão
  return <img {...props} />;
});

// Mock do next/link
jest.mock("next/link", () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>;
  };
});

describe("Navbar component", () => {
  it("deve renderizar o logo com alt correto", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("Magic: The Gathering Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/images/magic-logo.png");
  });

  it("deve ter link para a página inicial com texto 'Busca'", () => {
    render(<Navbar />);
    const buscaLink = screen.getByRole("link", { name: /busca/i });
    expect(buscaLink).toBeInTheDocument();
    expect(buscaLink).toHaveAttribute("href", "/");
  });

  it("deve ter link para a página de favoritos com texto 'Favoritos'", () => {
    render(<Navbar />);
    const favoritosLink = screen.getByRole("link", { name: /favoritos/i });
    expect(favoritosLink).toBeInTheDocument();
    expect(favoritosLink).toHaveAttribute("href", "/favorites");
  });
});
