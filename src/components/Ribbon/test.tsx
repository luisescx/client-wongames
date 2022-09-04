import { screen } from "@testing-library/react";
import theme from "styles/themes";
import { renderWithTheme } from "utils/tests/helpers";

import Ribbon from ".";

describe("<Ribbon />", () => {
  it("should render the text correctly", () => {
    const { container } = renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with the primary color", () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: "#F231A5"
    });
  });

  it("should render with the secondary color", () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: "#3CD3C1"
    });
  });

  it("should render with normal size text", () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      fontSize: theme.font.sizes.small,
      height: "3.6rem"
    });
  });
});
