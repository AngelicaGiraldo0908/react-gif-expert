import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en GifExpertApp", () => {

  test("Debe añadir una categoría no existente", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "Pez" } });
    fireEvent.submit(form);

    expect(screen.getByText("Pez")).toBeTruthy();
  });

   test("No debe añadir una categoría existente", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "Perro" } });
    fireEvent.submit(form);

    expect(screen.getAllByText("Perro").length).toBe(1);
  }); 
});
