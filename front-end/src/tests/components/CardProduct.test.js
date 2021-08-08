import CardProduct from "../../components/CardProduct";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Reducers from "../../reducers";
import { createStore } from "redux";
const prefix = "customer_products__";
const store = createStore(Reducers);

describe("1 - Atributos do Card", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <CardProduct
          prefix={prefix}
          price={4.49}
          tumbnail="https://thumbs.jusbr.com/imgs.jusbr.com/publications/artigos/images/capturar1452194585.JPG"
          title="Skol lata 350ml"
          id={1}
        />
      </Provider>
    );
  });
  test("O preço do produto deve aparecer no card", () => {
    expect(
      screen.getByTestId(`${prefix}element-card-price-1`)
    ).toBeInTheDocument();
  });
  test("A imagem do produto deve aparecer no card", () => {
    expect(
      screen.getByTestId(`${prefix}img-card-bg-image-1`)
    ).toBeInTheDocument();
  });
  test("O nome do produto deve aparecer no card", () => {
    expect(
      screen.getByTestId(`${prefix}element-card-title-1`)
    ).toBeInTheDocument();
  });
});
