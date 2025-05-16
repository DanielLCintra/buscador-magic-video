import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";
import { Card as CardType } from "../../types/Card";
import "@testing-library/jest-dom";

jest.mock("../FavoriteButton/FavoriteButton", () => () => (
  <button data-testid="mock-favorite">Favoritar</button>
));

const mockCard: CardType = {
  id: "123",
  name: "Lightning Bolt",
  type: "Instant",
  text: "Deal 3 damage to any target.",
  imageUrl: "https://example.com/lightning-bolt.jpg",
};

describe("Card Component", () => {
  it("deve renderizar os dados da carta corretamente", () => {
    render(<Card card={mockCard} />);

    expect(screen.getByText("Lightning Bolt")).toBeInTheDocument();
    expect(screen.getByText("Instant")).toBeInTheDocument();
    expect(
      screen.getByText("Deal 3 damage to any target.")
    ).toBeInTheDocument();
    expect(screen.getByAltText("Lightning Bolt")).toBeInTheDocument();
    expect(screen.getByTestId("mock-favorite")).toBeInTheDocument();
  });

  it("deve mostrar a imagem em zoom ao clicar nela", () => {
    render(<Card card={mockCard} />);

    const image = screen.getByAltText("Lightning Bolt");
    fireEvent.click(image);

    const zoomedImage = screen.getAllByAltText("Lightning Bolt")[1];
    expect(zoomedImage).toBeInTheDocument();
    expect(zoomedImage).toHaveClass("max-w-[90vw]");
  });

  it("deve fechar o zoom ao clicar no fundo escuro", () => {
    render(<Card card={mockCard} />);

    const image = screen.getByAltText("Lightning Bolt");
    fireEvent.click(image);

    const overlay =
      screen.getByRole("dialog") ||
      screen.getByTestId("zoom-overlay") ||
      screen.getByAltText("Lightning Bolt").parentElement;
    fireEvent.click(overlay!);

    const zoomedImages = screen.queryAllByAltText("Lightning Bolt");
    expect(zoomedImages.length).toBe(1);
  });
});
