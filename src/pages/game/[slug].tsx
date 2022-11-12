import { QueryGames, QueryGamesVariables } from "graphql/generated/QueryGames";
import {
  QueryGamesBySlug,
  QueryGamesBySlugVariables
} from "graphql/generated/QueryGamesBySlug";
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from "graphql/queries/games";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Game, { GameTemplateProps } from "templates/Game";
import { initializeApollo } from "utils/apollo";

import { QueryRecommended } from "graphql/generated/QueryRecommended";
import { QUERY_RECOMMENDED } from "graphql/queries/recommended";
import { gamesMapper, highlightMapper } from "utils/mappers";
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from "graphql/generated/QueryUpcoming";
import { QUERY_UPCOMING } from "graphql/queries/upcoming";

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Game {...props} />;
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      pagination: {
        limit: 9
      }
    }
  });

  const paths = data.games?.data.map((game) => ({
    params: {
      slug: game.attributes?.slug
    }
  }));

  return {
    paths,
    fallback: true
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGamesBySlug,
    QueryGamesBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      filters: {
        slug: {
          eq: `${params?.slug}`
        }
      }
    }
  });

  const dataConvert = data.games?.data;

  if (!dataConvert || !dataConvert.length) {
    return {
      notFound: true
    };
  }

  const game = dataConvert![0].attributes;

  const { data: recommendedData } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  });

  const TODAY = new Date().toISOString().slice(0, 10);
  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({ query: QUERY_UPCOMING, variables: { date: TODAY } });

  return {
    revalidate: 60,
    props: {
      cover: `http://localhost:1337${game?.cover?.data?.attributes?.src}`,
      gameInfo: {
        title: game?.name,
        price: game?.price,
        description: game?.short_description
      },
      gallery: game?.gallery?.data.map((gallery) => ({
        src: `http://localhost:1337${gallery.attributes?.src}`,
        label: gallery.attributes?.label
      })),
      description: game?.description,
      details: {
        developer: game?.developers?.data[0].attributes?.name,
        releaseDate: game?.release_date,
        platforms: game?.platforms?.data.map(
          (platform) => platform.attributes?.name
        ),
        publisher: game?.publisher?.data?.attributes?.name,
        rating: game?.rating,
        genres: game?.categories?.data.map(
          (category) => category.attributes?.name
        )
      },
      upcomingTitle: upcoming.showcase?.data?.attributes?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcoming.upcomingGames?.data),
      upcomingHighlight: highlightMapper(
        upcoming.showcase?.data?.attributes?.upcomingGames?.highlight
      ),
      recommendedTitle:
        recommendedData.recommended?.data?.attributes?.section.title,
      recommendedGames: gamesMapper(
        recommendedData.recommended?.data?.attributes?.section.games?.data
      )
    }
  };
};
