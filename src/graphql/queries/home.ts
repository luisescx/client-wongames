import { gql } from "@apollo/client";
import { BannerFragment } from "graphql/fragments/banner";
import { GameFragment } from "graphql/fragments/game";

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }

    newGames: games(
      pagination: { limit: 8 }
      filters: { release_date: { lte: "2022-11-05" } }
      sort: "release_date:desc"
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
`;
