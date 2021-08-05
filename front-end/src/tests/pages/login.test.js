import Login from "../../pages/Login";
import { render, screen } from "@testing-library/react";
const prefix = "common_login__";

describe("1 - Inputs da tela de login", () => {
  test("O campo de email deve estar presente na tela", () => {
    render(<Login />);
    const inpEmail = screen.getByTestId(`${prefix}input-email`);
    expect(inpEmail).toBeInTheDocument();
  });
  test("O campo de senha deve estar presente na tela", () => {
    render(<Login />);
    const inpPass = screen.getByTestId(`${prefix}input-password`);
    expect(inpPass).toBeInTheDocument();
  });
});
describe("2 - Botões da tela de login", () => {
  test("O botão responsável pelo login deve estar presente na tela", () => {
    render(<Login />);
    const btnLogin = screen.getByTestId(`${prefix}button-login`);
    expect(btnLogin).toBeInTheDocument();
  });
  test("O botão responsável pelo cadastro deve estar presente na tela", () => {
    render(<Login />);
    const btnPass = screen.getByTestId(`${prefix}button-register`);
    expect(btnPass).toBeInTheDocument();
  });
  test("O botão responsável pelo login deve estar desabilitado", () => {
    render(<Login />);
    const btnLogin = screen.getByTestId(`${prefix}button-login`);
    expect(btnLogin).toBeDisabled();
  });
});
describe("3 - Deve existir um elemento responsável por mostrar erros de login", () => {
  test("Deve existir o elemento de mostrar mensagens de erro", () => {
    render(<Login />);
    const elemHide = screen.getByTestId(`common_login__element-invalid-email`);
    expect(elemHide).toBeInTheDocument();
  });
  test("O elemento deve estar oculto", () => {
    render(<Login />);
    const elemHide = screen.getByTestId(`common_login__element-invalid-email`);
    expect(elemHide.getAttribute("visibility")).toBeFalsy();
  });
});
