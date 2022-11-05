import Base from "templates/Base";

import { BannerProps } from "components/Banner";
import BannerSlider from "components/BannerSlider";
import { Container } from "components/Container";
import { GameCardProps } from "components/GameCard";
import { HighlightProps } from "components/Highlight";
import Showcase from "components/Showcase";
import * as S from "./styles";

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  newGamesTitle: string;
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  mostPopularGamesTitle: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  upcomingGamesTitle: string;
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
  freeGamesTitle: string;
};

const Home = ({
  banners,
  newGames,
  newGamesTitle,
  mostPopularHighlight,
  mostPopularGamesTitle,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingGamesTitle,
  freeGames,
  freeGamesTitle,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcomingHighlight}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
);

export default Home;
