import AdminManager from "../../pages/AdminManager";
import { render, screen, waitFor } from "@testing-library/react";
const prefix = "admin_manage__";

describe("1 - Inputs da tela de Administrador", () => {
  test('O campo de "nome e sobrenome" deve estar presente na tela', () => {
    localStorage.setItem("user", JSON.stringify({ name: "User test" }));
    render(<AdminManager />);
    expect(screen.getByTestId(`${prefix}input-name`)).toBeInTheDocument();
  });
  test('O campo de "email" deve estar presente na tela', () => {
    localStorage.setItem("user", JSON.stringify({ name: "User test" }));
    render(<AdminManager />);
    expect(screen.getByTestId(`${prefix}input-name`)).toBeInTheDocument();
  });
  test('O campo de "senha" deve estar presente na tela', () => {
    localStorage.setItem("user", JSON.stringify({ name: "User test" }));
    render(<AdminManager />);
    expect(screen.getByTestId(`${prefix}input-password`)).toBeInTheDocument();
  });
  test('O campo de "selecionar tipo" deve estar presente na tela', () => {
    localStorage.setItem("user", JSON.stringify({ name: "User test" }));
    render(<AdminManager />);
    expect(screen.getByTestId(`${prefix}select-role`)).toBeInTheDocument();
  });
});
describe("2 - Botões da tela de Administrador", () => {
  test('O botão de "Cadastrar" deve estar presente na tela', () => {
    localStorage.setItem("user", JSON.stringify({ name: "User test" }));
    render(<AdminManager />);
    expect(screen.getByTestId(`${prefix}button-register`)).toBeInTheDocument();
  });
  test('O botão de "Cadastrar" deve estar desabilitado', () => {
    localStorage.setItem("user", JSON.stringify({ name: "User test" }));
    render(<AdminManager />);
    expect(screen.getByTestId(`${prefix}button-register`)).toBeDisabled();
  });
  test('O botão de "Excluir" deve estar presente na tela', async () => {
    localStorage.setItem("user", JSON.stringify({ name: "User test" }));
    render(<AdminManager />);
    await waitFor(() => {
      expect(
        screen.getByTestId(`${prefix}element-user-table-remove-1`)
      ).toBeInTheDocument();
    });
  });
});
