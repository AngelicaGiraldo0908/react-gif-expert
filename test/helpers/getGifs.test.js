import {getGifs} from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => { 
    test('Debe de retornar un arreglo de gifs', async() => { 
        const gifs = await getGifs('Jirafas');

        //Arreglo que tiene más de un elemento
        expect(gifs.length).toBeGreaterThan(0);

        //Evaluar que el arreglo tenga la misma estructura
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title:expect.any(String),
            url: expect.any(String)
        })

     })
 })