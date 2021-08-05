import Register from "../../pages/Register";
import { render, screen } from "@testing-library/react";
const prefix = "common_register__";

describe("1 - Inputs da tela de registro", () => {
  test("O campo de nome deve estar presente na tela", () => {
    render(<Register />);
    const inpName = screen.getByTestId(`${prefix}input-name`);
    expect(inpName).toBeInTheDocument();
  });
  test("O campo de email deve estar presente na tela", () => {
    render(<Register />);
    const inpEmail = screen.getByTestId(`${prefix}input-email`);
    expect(inpEmail).toBeInTheDocument();
  });
  test("O campo de email deve estar presente na tela", () => {
    render(<Register />);
    const inpPass = screen.getByTestId(`${prefix}input-password`);
    expect(inpPass).toBeInTheDocument();
  });
});
describe("2 - Botão da tela de registro", () => {
  test("O botão responsável pelo registro deve estar presente na tela", () => {
    render(<Register />);
    const btnRegister= screen.getByTestId(`${prefix}button-register`);
    expect(btnRegister).toBeInTheDocument();
  });
  test("O botão responsável pelo registro deve estar desabilitado", () => {
    render(<Register />);
    const btnRegister = screen.getByTestId(`${prefix}button-register`);
    expect(btnRegister).toBeDisabled();
  });
});
describe("3 - Deve existir um elemento responsável por mostrar erros de registro", () => {
  test("Deve existir o elemento de mostrar mensagens de erro", () => {
    render(<Register />);
    const elemHide = screen.getByTestId(`${prefix}element-invalid_register`);
    expect(elemHide).toBeInTheDocument();
  });
  test("O elemento deve estar oculto", () => {
    render(<Register />);
    const elemHide = screen.getByTestId(`${prefix}element-invalid_register`);
    expect(elemHide.getAttribute("visibility")).toBeFalsy();
  });
});
