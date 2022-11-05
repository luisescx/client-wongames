import Home, { HomeTemplateProps } from "templates/Home";
import gamesMock from "components/GameCardSlider/mock";
import highlightMock from "components/Highlight/mock";
import { initializeApollo } from "utils/apollo";
import {
  QueryBanners,
  QueryBannersVariables
} from "graphql/generated/QueryBanners";
import { QUERY_BANNERS } from "graphql/queries/home";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<
    QueryBanners,
    QueryBannersVariables
  >({
    query: QUERY_BANNERS,
    variables: {
      pagination: { limit: 9 }
    }
  });

  const banners = data.banners?.data || [];

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
      newGames: gamesMock,
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
