import { renderHook, waitFor} from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
    
  test("Debe de regresar el estado inciail", () => {
    //Hacer el llamado a un Hook
    const { result } = renderHook(() => useFetchGifs("Foca"));
    const { images, isLoading } = result.current;
    //Que el tamaño del arreglo de imagenes es cero
    expect(images.length).toBe(0);
    //Que es cargando es true
    expect(isLoading).toBeTruthy();
  });

  test("Debe retornar un arreglo de imagenes y isLoading en false", async() => {
    const { result } = renderHook(() => useFetchGifs("Foca"));

    //Espera a que result.current.images.length sea mayor a cero
    await waitFor(
        () => expect(result.current.images.length).toBeGreaterThan(0),
    );

    //Despues de que cargan las imagenes se espera
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0); //Que el tamaño del arreglo de imagenes sea mayor a cero
    expect(isLoading).toBeFalsy(); //Que el cargando sea FALSE

  });
});
