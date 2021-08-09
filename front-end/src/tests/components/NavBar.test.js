import NavBar from "../../components/NavBar";
import { render, screen } from "@testing-library/react";
const prefix = "customer_products__";

describe("1 - Itens da Navbar", () => {
  beforeEach(() => {
    render(<NavBar user={"Usuário Teste"} contextPage="Contexto de Teste" />);
  });
  test("O item identificador da tela deve estar presente", () => {
    expect(
      screen.getByTestId(`${prefix}element-navbar-link-products`)
    ).toBeInTheDocument();
  });
  test("O item identificador da operação deve estar presente", () => {
    expect(
      screen.getByTestId(`${prefix}element-navbar-link-orders`)
    ).toBeInTheDocument();
  });
  test("O item identificador do usuário deve estar presente", () => {
    expect(
      screen.getByTestId(`${prefix}element-navbar-user-full-name`)
    ).toBeInTheDocument();
  });
  test("O item item de logout deve estar presente", () => {
    expect(
      screen.getByTestId(`${prefix}element-navbar-link-logout`)
    ).toBeInTheDocument();
  });
});

describe("2 - Verificação das propriedades mutáveis", () => {
  beforeEach(() => {
    render(<NavBar user={"Fulano de Tal"} contextPage="Produtos" />);
  });
  test("Verifica se o contexto aparece na tela", () => {
    const contextScreem = screen.getByTestId(
      `${prefix}element-navbar-link-products`
    );
    expect(contextScreem.innerHTML).toBe("Produtos");
  });
  test("Verifica se o usuário passado aparece na tela", () => {
    const idScreen = screen.getByTestId(
      `${prefix}element-navbar-user-full-name`
    );
    expect(idScreen.innerHTML).toBe("Fulano de Tal");
  });
});
