import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import GameInfo from ".";

const props = {
  id: "1",
  title: "My Game Title",
  description: "Game Description",
  price: 210
};

describe("<GameInfo />", () => {
  it("should render the game information", () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();

    expect(screen.getByText(/\$210\.00/)).toBeInTheDocument();

    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it("should render buttons", () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /wishlist/i })
    ).toBeInTheDocument();
  });
});
