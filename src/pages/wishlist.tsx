import Wishlist, { WishlistTemplateProps } from "templates/Wishlist";
import gamesMock from "components/GameCardSlider/mock";
import protectedRoutes from "utils/protected-routes";
import { GetServerSidePropsContext } from "next";

import { initializeApollo } from "utils/apollo";
import { QueryRecommended } from "graphql/generated/QueryRecommended";
import { QUERY_RECOMMENDED } from "graphql/queries/recommended";
import { gamesMapper, highlightMapper } from "utils/mappers";

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  });

  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: data.recommended?.data?.attributes?.section.title,
      recommendedGames: gamesMapper(
        data.recommended?.data?.attributes?.section.games?.data
      ),
      recommendedHighlight: highlightMapper(
        data.recommended?.data?.attributes?.section.highlight
      )
    }
  };
}
