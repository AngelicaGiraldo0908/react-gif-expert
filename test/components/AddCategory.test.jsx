import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Prueba de AddCategory', () => { 

    const inputValue= 'Koala';

    test('Debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={() =>{}}/>)
        //screen.debug();

        //Obtener el input
        const input = screen.getByRole('textbox');
        //Disparar un evento que es digitar un texto Jirafa
        fireEvent.input(input,{target: {value: inputValue}});
        //Obtener el value del input.
        expect(input.value).toBe(inputValue);
     });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 

        const onNewCategory = jest.fn();//Jest function que está marcada como un Mock
        //Un Mock cuando estamos hablando del testing es una simulación de esa funcion.

        render(<AddCategory onNewCategory={onNewCategory}/>)

        //Obtener el input
        const input = screen.getByRole('textbox');
        //Obtener el formulario (debe tener un aria-label)
        const form = screen.getByRole('form');

        //Disparar los eventos

        //Cambiar el valor de la caja de texto
        fireEvent.input(input,{target: {value: inputValue}});

        //Disparar el submit
        fireEvent.submit(form);

        //El value del input debe ser un String vacio
        expect(input.value).toBe("");

        //Evaluar si la función ha sido llamada
        expect(onNewCategory).toHaveBeenCalled();
        //Evaluar si la función fue llamada solo una vez o el tiempo que se defina.
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //Evaluar si la función fue llamada con el valor del inputValue
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar el onNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>)
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        //Evaluar que la función no haya sido llamada porque el input está vacío.
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled(); //Otra forma de hacerlo.

     })
 })