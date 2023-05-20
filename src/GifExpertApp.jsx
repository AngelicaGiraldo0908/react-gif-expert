import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  //Ayuda del visual studio para crear: usestateSnippet
  const [categories, setCategories] = useState(["Perros"]);
  
  const onAddCategory = (newCategory) => {

    //setCategories([...categories, "Conejos"]);
    //Otra forma de hacerse
    //setCategories(cat => [...categories, 'Conejos']);

    //Validar que la categoria no exista en la lista
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  //Ol: Order list
  //Li: lista enumerada

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
