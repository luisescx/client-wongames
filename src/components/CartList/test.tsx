import { screen } from "@testing-library/react";
import { CartContextDefaultValues } from "hooks/use-cart";
import { render } from "utils/test-utils";

import CartList from ".";
import items from "./mock";

describe("<CartList />", () => {
  it("should render the cart list", () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: "R$ 330,00"
    };

    render(<CartList />, { cartProviderProps });

    expect(screen.getAllByRole("heading")).toHaveLength(2);
    expect(screen.getByText("R$ 330,00")).toHaveStyle({ color: "#F231A5" });
  });

  it("should render the button", () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items
    };

    render(<CartList hasButton />, { cartProviderProps });

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
  });
});
