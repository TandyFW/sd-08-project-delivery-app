import CustomerDetails from "../../pages/CustomerDetails";
import renderWithRouter from "../helpers/renderWithRouter";
import { screen, waitFor } from "@testing-library/react";
const prefix = "customer_order_details__";

describe("1 - Informações da tela de detalhes do pedido do cliente", () => {
  test("O campo de email deve estar presente na tela", async () => {
    localStorage.setItem("user", JSON.stringify({ name: "User test" }));
  });
});
