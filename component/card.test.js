/**
 * 1 - Hacer que nuestro test falle
 * 2 - Hacer que nuestro test funcione
 * 3 - Refactor del codigo
 **/

import { render } from "@testing-library/react";
import { sumar } from "../util";
import { CardComponent } from "./CardComponent";

const mockData = {
  image: "url",
  name: "algo",
  species: "otra cosa",
};

test("Card Component no recibe datos", () => {
  const component = render(<CardComponent />);
  expect(component.container.querySelector("h4").textContent).toBe("Loading");
});

test("Card Component si recibe datos", () => {
  const component = render(<CardComponent character={mockData} />);

  expect(component.container.querySelector("h2").textContent).toBe("algo");
  expect(component.container.querySelector("p").textContent).toBe("otra cosa");
});

test("Sumar deberia sumar dos numeros", () => {
    expect(sumar(10,10)).toBe(20);
});
