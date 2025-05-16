import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";
import { Card as CardType } from "../../types/Card";
import "@testing-library/jest-dom";

// Mock do hook useFavorites
jest.mock("../../hooks/useFavorites", () => ({
  useFavorites: jest.fn(),
}));

const mockCard: CardType = {
  id: "123",
  name: "Lightning Bolt",
  type: "Instant",
  text: "Deal 3 damage to any target.",
  imageUrl: "https://example.com/lightning-bolt.jpg",
};

describe("FavoriteButton component", () => {
  const addFavorite = jest.fn();
  const removeFavorite = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar o botão de 'Favoritar' quando a carta não é favorita", () => {
    const { useFavorites } = require("../../hooks/useFavorites");
    useFavorites.mockReturnValue({
      isFavorite: () => false,
      addFavorite,
      removeFavorite,
    });

    render(<FavoriteButton card={mockCard} />);
    const button = screen.getByRole("button", { name: /favoritar/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(addFavorite).toHaveBeenCalledWith(mockCard);
  });

  it("deve renderizar o botão de 'Remover dos Favoritos' quando a carta é favorita", () => {
    const { useFavorites } = require("../../hooks/useFavorites");
    useFavorites.mockReturnValue({
      isFavorite: () => true,
      addFavorite,
      removeFavorite,
    });

    render(<FavoriteButton card={mockCard} />);
    const button = screen.getByRole("button", {
      name: /remover dos favoritos/i,
    });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(removeFavorite).toHaveBeenCalledWith(mockCard);
  });
});
