import { render } from "@testing-library/react";
import Items, { generateMetadata } from "@/app/items/page";

jest.mock("@/actions/items", () => ({
  getItems: () => ({
    items: [
      {
        id: "MLA1386860205",
        title: "Animalitos Para El Baño Bebes 6 Piezas Orig Bath Toys ",
        price: {
          currency: "ARS",
          amount: 15799,
          decimals: 2,
        },
        picture:
          "http://http2.mlstatic.com/D_847668-MLU74829560282_032024-O.jpg",
        condition: "new",
        free_shipping: false,
      },
    ],
    categories: ["Juegos y Juguetes"],
  }),
}));

const searchParams = { search: "test" };

describe("Items Component", () => {
  test("renders Items component", async () => {
    const jsx = await Items({ searchParams });
    render(jsx);
  });

  test("generate metadata Items component", async () => {
    const data = await generateMetadata({ searchParams });
    expect(data.title).toEqual(`${searchParams.search} | MercadoLibre 📦`);
  });
});
