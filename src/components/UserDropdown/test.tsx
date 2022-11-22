import { screen, waitFor } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import userEvent from "@testing-library/user-event";

import UserDropdown from ".";

describe("<UserDropdown />", () => {
  it("should render the heading", () => {
    renderWithTheme(<UserDropdown username="John" />);

    expect(screen.getByText(/john/i)).toBeInTheDocument();
  });

  it("should render the menu", async () => {
    renderWithTheme(<UserDropdown username="John" />);

    userEvent.click(screen.getByText(/john/i));

    await waitFor(() => {
      expect(
        screen.getByRole("link", { name: /my profile/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: /wishlist/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /sign out/i })
      ).toBeInTheDocument();
    });
  });
});
