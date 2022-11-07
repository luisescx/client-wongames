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

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      pagination: { limit: 15 }
    }
  });

  return {
    props: {
      revalidate: 60,
      initializeApollo: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  };
}
