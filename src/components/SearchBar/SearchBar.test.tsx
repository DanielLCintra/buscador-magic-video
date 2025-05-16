import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
  it("deve renderizar o input com o valor inicial correto", () => {
    render(<SearchBar value="Relentless Rats" onChange={() => {}} />);
    const input = screen.getByPlaceholderText(/pesquise cartas do magic/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Relentless Rats");
  });

  it("deve chamar onChange ao digitar no input", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText(/pesquise cartas do magic/i);

    fireEvent.change(input, { target: { value: "Lightning Bolt" } });
    expect(handleChange).toHaveBeenCalledWith("Lightning Bolt");
  });
});
