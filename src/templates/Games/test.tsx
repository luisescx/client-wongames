import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import { fetchMoreMock, gamesMock } from "./mock";
import filterItemsMock from "components/ExploreSideBar/mock";
import { MockedProvider } from "@apollo/client/testing";
import userEvent from "@testing-library/user-event";

import Games from ".";
import { InMemoryCache } from "@apollo/client";

jest.mock("templates/Base", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  }
}));

jest.mock("components/ExploreSidebar", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>;
  }
}));

describe("<Games />", () => {
  it("should render sections", async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    // we wait until we have data to get the elements
    // get => tem certeza do elemento
    // query => Não tem o elemento
    // find => processos assincronos

    expect(
      await screen.findByTestId("Mock ExploreSidebar")
    ).toBeInTheDocument();
    expect(await screen.findByTestId("Game Card")).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: /show more/i })
    ).toBeInTheDocument();
  });

  it("should render more games when show more is clicked", async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[gamesMock, fetchMoreMock]}
        cache={new InMemoryCache()}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    userEvent.click(await screen.findByRole("button", { name: /show more/i }));
  });

  it("should render empty when no games", async () => {
    renderWithTheme(
      <MockedProvider mocks={[]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    );

    expect(
      await screen.findByText(/We didn't find any games with this filter/i)
    ).toBeInTheDocument();
  });
});
