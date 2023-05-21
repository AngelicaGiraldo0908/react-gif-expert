const { render, screen } = require("@testing-library/react");
import { Giftem } from "../../src/components/Giftem";

describe("Prueba de Giftem", () => {
  const title = "Conejos";
  const url = "https://conejos.com/conejo.png";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<Giftem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<Giftem title={title} url={url} />);
    //expect(screen.getByRole('img').src).toBe(url);
    //expect(screen.getByRole('img').alt).toBe(title);
    const {src, alt} =screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);

  });

  test('Debe de mostrar el titulo en el componente', () => { 
    render(<Giftem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
   });

});
