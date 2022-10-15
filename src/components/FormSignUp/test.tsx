import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import FormSignUp from ".";

describe("<FormSignUp />", () => {
  it("should render the form", () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/confirm password/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /sign up now/i })
    ).toBeInTheDocument();
  });

  it("should render text and link to sign in", () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument();
  });
});