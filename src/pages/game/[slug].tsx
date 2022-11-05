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

import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";

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

  const game = dataConvert![0].attributes;

  return {
    props: {
      revalidate: 60,
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
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock
    }
  };
};
