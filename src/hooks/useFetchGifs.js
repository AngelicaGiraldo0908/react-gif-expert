import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  //useEffect: Es un hook de react que sirve para ejecutar un efecto secundario
  //efecto secundario: Proceso que se quiere ejecutar cuando algo suceda
  //Ej: Cuando la categoría cambie quiero disparar un efecto.
  //Ej: Cuando el componente se cargue por primera vez quiero hacer una petición HTTP.

  useEffect(() => {
    getImages();
  }, []);

  // Si se deja asi [] significa que el hook solo se va a disparar
  //la primer vez que se crea y se construye el componente

  return {
    images, //Variable que apunta al mismo nombre images:images
    isLoading,
  };
};
