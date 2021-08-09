import CardOrder from "../../components/CardOrder";
import Seller from "../../pages/Seller";
import { screen, waitFor } from "@testing-library/react";
import renderWithRouter from "../helpers/renderWithRouter";
import userEvent from "@testing-library/user-event";
import axios from "axios";
const prefix = "customer_orders__";

describe("1 - Itens do CardOrder da tela de cliente", () => {
  beforeEach(() => {
    renderWithRouter(
      <CardOrder
        prefix={prefix}
        id={1}
        deliveryStatus="Pendente"
        orderDate="2021-08-05 21:06:14"
        price={22.49}
        onClick={() => {}}
      />
    );
  });
  test("O número do pedido deve estar presente", () => {
    const orderId = screen.getByTestId(`${prefix}element-order-id-1`);
    expect(orderId).toBeInTheDocument();
    expect(orderId.innerHTML).toBe("1");
  });
  test("O status do pedido deve estar presente", () => {
    const statusOrder = screen.getByTestId(
      `${prefix}element-delivery-status-1`
    );
    expect(statusOrder).toBeInTheDocument();
    expect(statusOrder.innerHTML).toBe("Pendente");
  });
  test("O data do pedido deve estar presente", () => {
    const orderDate = screen.getByTestId(`${prefix}element-order-date-1`);
    expect(orderDate).toBeInTheDocument();
    expect(orderDate.innerHTML).toBe("05/08/2021");
  });
  test("O total do pedido deve estar presente", () => {
    const orderTotal = screen.getByTestId(`${prefix}element-card-price-1`);
    expect(orderTotal).toBeInTheDocument();
    expect(orderTotal.innerHTML).toBe("22,49");
  });
});
describe("2 - Itens do CardOrder da tela de vendedor", () => {
  beforeEach(() => {
    renderWithRouter(
      <CardOrder
        prefix={prefix}
        address="Rua dos Testes, 326"
        id={1}
        deliveryStatus="Pendente"
        orderDate="2021-08-05 21:06:14"
        price={22.49}
        onClick={() => {}}
      />
    );
  });
  test("O endereço do cliente do pedido deve estar presente", async () => {
    const address = await screen.findByText("Rua dos Testes, 326");
    expect(address).toBeInTheDocument();
  });
});
describe("3 - Ao clicar no card direciona para tela de detalhes do pedido", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    const mockGet = jest.spyOn(axios, "get");
    mockGet.mockImplementation(
      async () =>
        await Promise.resolve({
          data: [
            {
              id: 1,
              total_price: 9.99,
              delivery_addres: "rua Teste",
              delivery_number: 333,
              sale_date: "2021-08-05 21:06:14",
              status: "Pendente",
            },
          ],
        })
    );
    localStorage.setItem("user", JSON.stringify({ name: "User test" }));
  });
  test("O evento do click no card direciona para os detalhes do pedido", async () => {
    const { history } = renderWithRouter(<Seller />);
    await waitFor(() => {
      userEvent.click(
        screen.getByTestId(`seller_orders__element-order-id-1`).parentElement
      );
      const { pathname } = history.location;
      expect(pathname).toBe("/seller/orders/1");
    });
  });
});
