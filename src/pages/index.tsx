import Home, { HomeTemplateProps } from "templates/Home";
import { initializeApollo } from "utils/apollo";
import { QUERY_HOME } from "graphql/queries/home";
import { QueryHome, QueryHomeVariables } from "graphql/generated/QueryHome";
import { bannerMapper, gamesMapper, highlightMapper } from "utils/mappers";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const today = new Date().toISOString().slice(0, 10);

  const { data } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: today
    }
  });

  const banners = data.banners?.data || [];
  const newGames = data.newGames?.data || [];
  const upcomingGames = data.upcomingGames?.data || [];
  const freeGames = data.freeGames?.data || [];
  const sections = data.sections?.data?.attributes;

  return {
    props: {
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularGames: gamesMapper(sections?.popularGames?.games!.data),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  };
}
