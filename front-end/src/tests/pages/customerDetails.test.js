import CustomerDetails from "../../pages/CustomerDetails";
import { screen, waitFor, render } from "@testing-library/react";
import axios from "axios";
const prefix = "customer_order_details__";
import { MemoryRouter, Route } from "react-router-dom";

describe("1 - Informações da tela de detalhes do pedido do cliente", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    const mockGet = jest.spyOn(axios, "get");
    mockGet.mockImplementation(
      async () =>
        await Promise.resolve({
          data: {
            id: 1,
            total_price: "9.99",
            delivery_address: "aaa",
            delivery_number: "ssss",
            sale_date: "2021-08-05T21:06:14.000Z",
            status: "Pendente",
            userId: 3,
            sellerId: 2,
            user_id: 3,
            seller_id: 2,
            user: {
              name: "Cliente Zé Birita",
            },
            seller: {
              name: "Fulana Pereira",
            },
            products: [
              {
                id: 3,
                name: "Antarctica Pilsen 300ml",
                price: "2.49",
                url_image:
                  "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
                createdAt: "2021-08-05T18:07:36.000Z",
                updatedAt: "2021-08-05T18:07:36.000Z",
                salesProducts: {
                  quantity: 1,
                },
              },
              {
                id: 4,
                name: "Brahma 600ml",
                price: "7.50",
                url_image: "http://localhost:3001/images/brahma_600ml.jpg",
                createdAt: "2021-08-05T18:07:36.000Z",
                updatedAt: "2021-08-05T18:07:36.000Z",
                salesProducts: {
                  quantity: 1,
                },
              },
            ],
          },
        })
    );
    localStorage.setItem("user", JSON.stringify({ name: "User test" }));
    render(
      <MemoryRouter initialEntries={["/customer/orders/1"]}>
        <Route path="/customer/orders/:id">
          <CustomerDetails />
        </Route>
      </MemoryRouter>
    );
  });
  test("O número do pedido deve estar presente na tela", async () => {
    await waitFor(() => {
      expect(
        screen.getByTestId(`${prefix}element-order-details-label-order-id`)
      ).toBeInTheDocument();
    });
  });
  test("O nome do vendedor deve estar presente na tela", async () => {
    await waitFor(() => {
      expect(
        screen.getByTestId(`${prefix}element-order-details-label-seller-name`)
      ).toBeInTheDocument();
    });
  });
  test("O data do pedido deve estar presente na tela", async () => {
    await waitFor(() => {
      expect(
        screen.getByTestId(`${prefix}element-order-details-label-order-date`)
      ).toBeInTheDocument();
    });
  });
  test("O status do pedido deve estar presente na tela", async () => {
    await waitFor(() => {
      expect(
        screen.getByTestId(
          `${prefix}element-order-details-label-delivery-status`
        )
      ).toBeInTheDocument();
    });
  });
  test("Deve haver um botão de finalizar o pedido", async () => {
    await waitFor(() => {
      expect(
        screen.getByTestId(`${prefix}button-delivery-check`)
      ).toBeInTheDocument();
    });
  });
  test("Deve constar um índice da relação do produto pedido", async () => {
    await waitFor(() => {
      expect(
        screen.getByTestId(`${prefix}element-order-table-item-number-1`)
      ).toBeInTheDocument();
    });
  });
  test("Deve constar o nome do produto pedido", async () => {
    await waitFor(() => {
      expect(
        screen.getByTestId(`${prefix}element-order-table-name-1`)
      ).toBeInTheDocument();
    });
  });
  test("Deve constar a quantidade do produto pedido", async () => {
    await waitFor(() => {
      expect(
        screen.getByTestId(`${prefix}element-order-table-quantity-1`)
      ).toBeInTheDocument();
    });
  });
  test("Deve constar o valor unitário produto pedido", async () => {
    await waitFor(() => {
      expect(
        screen.getByTestId(`${prefix}element-order-table-unit-price-1`)
      ).toBeInTheDocument();
    });
  });
  test("Deve constar o valor total de cada produto pedido", async () => {
    await waitFor(() => {
      expect(
        screen.getByTestId(`${prefix}element-order-table-sub-total-1`)
      ).toBeInTheDocument();
    });
  });
});
