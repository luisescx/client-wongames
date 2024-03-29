import "match-media-mock";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

import Wishlist from ".";

const props = {
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
  games: gamesMock,
  recommendedTitle: "You may like these games"
};

jest.mock("templates/Base", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  }
}));

jest.mock("components/Showcase", () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  }
}));

describe("<Wishlist />", () => {
  it("should render correctly", () => {
    renderWithTheme(<Wishlist {...props} />);

    expect(
      screen.getByRole("heading", { name: /wishlist/i })
    ).toBeInTheDocument();
    expect(screen.getAllByAltText(/population zero/i)).toHaveLength(6);
    expect(screen.getByTestId("Mock Showcase")).toBeInTheDocument();
  });

  it("should render empty when there are no games", () => {
    renderWithTheme(
      <Wishlist
        recommendedTitle="You may like these games"
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />
    );

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /your wishlist is empty/i })
    ).toBeInTheDocument();
  });
});
