import CustomerDetails from "../../pages/CustomerDetails";
import renderWithRouter from "../helpers/renderWithRouter";
import { screen, waitFor } from "@testing-library/react";
import getSale from "../../services/requestFunctions";
const prefix = "customer_order_details__";

describe("1 - Informações da tela de detalhes do pedido do cliente", () => {
  test("O campo de email deve estar presente na tela", async () => {
    localStorage.setItem("user", JSON.stringify({ name: "User test" }));
    // console.log(getSale(1));
    jest.spyOn(getSale, "getSale").mockImplementation(() => ({
      seller: {
        name: "Ivanildo",
      },
    }));
    renderWithRouter(<CustomerDetails />);
    await waitFor(() => {
      expect(getSale).toHaveBeenCalledTimes(1);
    });
  });
});
