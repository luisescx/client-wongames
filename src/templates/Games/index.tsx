import ExploreSideBar, { ItemProps } from "components/ExploreSideBar";
import GameCard, { GameCardProps } from "components/GameCard";
import { KeyboardArrowDown as ArrowDown } from "@styled-icons/material-outlined/KeyboardArrowDown";
import * as S from "./styles";

import Base from "templates/Base";
import { Grid } from "components/Grid";

export type GamesTemplateProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems, games = [] }: GamesTemplateProps) => {
  const handleFilter = () => {
    return;
  };

  const handleShowMore = () => {
    return;
  };

  return (
    <Base>
      <S.Content>
        <ExploreSideBar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games.map((game, index) => (
              <GameCard {...game} key={`${game.title}${index}`} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Content>
    </Base>
  );
};

export default GamesTemplate;
