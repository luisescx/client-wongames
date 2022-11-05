import {
  QueryHome_banners_data,
  QueryHome_freeGames_data,
  QueryHome_newGames_data,
  QueryHome_sections_data_attributes_freeGames_highlight,
  QueryHome_sections_data_attributes_popularGames_games_data,
  QueryHome_upcomingGames_data
} from "graphql/generated/QueryHome";

export const bannerMapper = (banners: QueryHome_banners_data[]) => {
  return banners.map((banner) => ({
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
  }));
};

type GamesTypes =
  | QueryHome_newGames_data
  | QueryHome_upcomingGames_data
  | QueryHome_freeGames_data
  | QueryHome_sections_data_attributes_popularGames_games_data;

export const gamesMapper = (games: GamesTypes[] | undefined) => {
  return (
    games &&
    games.map((game) => ({
      title: game.attributes?.name,
      slug: game.attributes?.slug,
      developer: game.attributes?.developers?.data[0].attributes?.name,
      img: `http://localhost:1337${game.attributes?.cover?.data?.attributes?.url}`,
      price: game.attributes?.price
    }))
  );
};

type HighlighTypes = QueryHome_sections_data_attributes_freeGames_highlight;

export const highlightMapper = (
  highlight: HighlighTypes | null | undefined
) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: `http://localhost:1337${highlight?.background.data?.attributes?.url}`,
      floatImage: `http://localhost:1337${highlight?.floatImage?.data?.attributes?.url}`,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }
  );
};
