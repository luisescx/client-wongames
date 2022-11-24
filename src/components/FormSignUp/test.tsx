import { screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import FormSignUp from ".";
import { render } from "utils/test-utils";

describe("<FormSignUp />", () => {
  it("should render the form", () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    );

    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
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
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    );

    expect(screen.getByRole("link", { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument();
  });
});
