import ExploreSideBar, { ItemProps } from "components/ExploreSideBar";
import GameCard, { GameCardProps } from "components/GameCard";
import { KeyboardArrowDown as ArrowDown } from "@styled-icons/material-outlined/KeyboardArrowDown";
import * as S from "./styles";
import { useQueryGames } from "graphql/queries/games";

import Base from "templates/Base";
import { Grid } from "components/Grid";
import { useCallback, useEffect } from "react";
import { QueryGames } from "graphql/generated/QueryGames";

export type GamesTemplateProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, fetchMore } = useQueryGames({
    variables: {
      pagination: { limit: 15 }
    }
  });

  const handleFilter = () => {
    return;
  };

  const handleShowMore = useCallback(() => {
    fetchMore({
      variables: {
        pagination: {
          limit: 15,
          start: data?.games?.data.length
        }
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousQueryResult;

        const oldData = previousQueryResult.games?.data || [];
        const newData = fetchMoreResult.games?.data || [];

        const newList = {
          data: [...oldData, ...newData]
        };

        return {
          games: {
            ...newList
          }
        } as QueryGames;
      }
    });
  }, [data?.games?.data, fetchMore]);

  useEffect(() => {
    console.log("data", data?.games?.data);
  }, [data]);

  return (
    <Base>
      <S.Content>
        <ExploreSideBar items={filterItems} onFilter={handleFilter} />

        {data?.games?.data && data?.games?.data.length && (
          <section>
            <Grid>
              {data?.games?.data.map((game, index) => (
                <GameCard
                  key={`${game.attributes?.name}${index}`}
                  title={game.attributes?.name || ""}
                  slug={game.attributes?.slug || ""}
                  developer={
                    (game.attributes?.developers?.data &&
                      game.attributes?.developers?.data.length &&
                      game.attributes?.developers?.data[0].attributes &&
                      game.attributes?.developers?.data[0].attributes?.name) ||
                    ""
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
        )}
      </S.Content>
    </Base>
  );
};

export default GamesTemplate;
