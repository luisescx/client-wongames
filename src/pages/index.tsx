import Home, { HomeTemplateProps } from "templates/Home";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";
import { initializeApollo } from "utils/apollo";
import { QUERY_HOME } from "graphql/queries/home";
import { QueryHome } from "graphql/generated/QueryHome";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  });

  const banners = data.banners?.data || [];
  const newGames = data.newGames?.data || [];

  return {
    props: {
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
        title: banner.attributes?.title,
        subtitle: banner.attributes?.subtitle,
        buttonLabel: banner.attributes?.button?.label,
        buttonLink: banner.attributes?.button?.link,
        ...(banner.attributes?.ribbon && {
          ribbon: banner.attributes.ribbon.text,
          ribbonColor: banner.attributes.ribbon.color,
          ribbonSize: banner.attributes.ribbon.size
        })
      })),
      newGames: newGames.map((game) => ({
        title: game.attributes?.name,
        slug: game.attributes?.slug,
        developer: game.attributes?.developers?.data[0].attributes?.name,
        img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
        price: game.attributes?.price
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  };
}
