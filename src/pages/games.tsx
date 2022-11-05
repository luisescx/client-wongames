import GamesTemplate, { GamesTemplateProps } from "templates/Games";

import filterItemsMock from "components/ExploreSideBar/mock";
import { initializeApollo } from "utils/apollo";
import { QueryGames, QueryGamesVariables } from "graphql/generated/QueryGames";
import { QUERY_GAMES } from "graphql/queries/games";

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      pagination: { limit: 9 }
    }
  });

  const dataConvert = data?.games?.data;

  return {
    props: {
      games:
        dataConvert?.map((game) => ({
          title: game.attributes?.name,
          slug: game.attributes?.slug,
          developer:
            game.attributes?.developers?.data[0].attributes?.name || "",
          img: game.attributes?.cover?.data?.attributes?.url
            ? `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`
            : "",
          price: game.attributes?.price
        })) || [],
      filterItems: filterItemsMock
    }
  };
}
