import ExploreSideBar, { ItemProps } from "components/ExploreSideBar";
import GameCard, { GameCardProps } from "components/GameCard";
import { KeyboardArrowDown as ArrowDown } from "@styled-icons/material-outlined/KeyboardArrowDown";
import * as S from "./styles";
import { useQuery } from "@apollo/client";
import { QueryGames, QueryGamesVariables } from "graphql/generated/QueryGames";
import { QUERY_GAMES } from "graphql/queries/games";

import Base from "templates/Base";
import { Grid } from "components/Grid";

export type GamesTemplateProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data } = useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, {
    variables: {
      pagination: { limit: 15 }
    }
  });

  const dataConvert = data?.games?.data || [];

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
            {dataConvert.map((game, index) => (
              <GameCard
                key={`${game.attributes?.name}${index}`}
                title={game.attributes?.name || ""}
                slug={game.attributes?.slug || ""}
                developer={
                  game.attributes?.developers?.data[0].attributes?.name || ""
                }
                img={
                  game.attributes?.cover?.data?.attributes?.url
                    ? `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`
                    : ""
                }
                price={game.attributes?.price || 0}
              />
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
