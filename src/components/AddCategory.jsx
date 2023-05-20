import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    //Evitar refresh
    event.preventDefault();
    //Validar que al menos hayan digitado un caracter
    if (inputValue.trim().length <= 1) return;
    //Agregar la categoria que digitaron en el input
    //setCategories((categories) => [...categories, inputValue]);
    onNewCategory(inputValue.trim());
    //Valor vacío al agregar un elemento a la lista
    setInputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
