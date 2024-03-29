import "match-media-mock";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";
import bannersMock from "components/BannerSlider/mock";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";
import Home from ".";

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  newGamesTitle: "New Games",
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  mostPopularGamesTitle: "Most Popular Games",
  upcomingGames: gamesMock,
  upcomingGamesTitle: "Upcoming Games",
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGamesTitle: "Free games",
  freeGames: gamesMock,
  freeHighlight: highlightMock
};

jest.mock("templates/Base", () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  }
}));

jest.mock("components/Showcase", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    }
  };
});

jest.mock("components/BannerSlider", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>;
    }
  };
});

describe("<Home />", () => {
  it("should render banner and showcases", () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId("Mock Banner Slider")).toBeInTheDocument();
    expect(screen.getAllByTestId("Mock Showcase")).toHaveLength(4);
  });
});
