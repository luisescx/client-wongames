import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Auth from ".";

describe("<Auth />", () => {
  it("should render all components", () => {
    renderWithTheme(
      <Auth title="Auth Screen">
        <input type="text" />
      </Auth>
    );

    expect(screen.getAllByRole("img", { name: /won games/i })).toHaveLength(2);
    expect(
      screen.getByRole("heading", {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /won is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /auth screen/i
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
