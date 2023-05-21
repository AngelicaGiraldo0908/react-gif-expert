import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Haga un mock completo de este pack
jest.mock("../../src/hooks/useFetchGifs");

describe("Prueba GifGrid", () => {
  const category = "Hipopotamo";

  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true, //Valor inicial
    });

    render(<GifGrid category={category} />);
    screen.debug();

    //Esperando que salga el texto Cargando...
    expect(screen.getByText("Cargando..."));
    //Esperando que salga el texto Hipopotamo
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imagenes useFetchItems", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Hipopotamo",
        url: "https://localhost/hipopotamo.jpg",
      },
      {
        id: "123",
        title: "Leon",
        url: "https://localhost/leon.jpg",
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false //Cuando ya hay imagenes el isLoading esta en false
    });

    render(<GifGrid category={category} />);
    //Esperar que las imagenes sean 2
    expect(screen.getAllByRole('img').length).toBe(2);

  });
});
