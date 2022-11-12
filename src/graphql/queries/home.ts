import { gql } from "@apollo/client";
import { BannerFragment } from "graphql/fragments/banner";
import { GameFragment } from "graphql/fragments/game";
import { HighlightFragment } from "graphql/fragments/highlight";

export const QUERY_HOME = gql`
  query QueryHome($date: Date!) {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }

    newGames: games(
      pagination: { limit: 8 }
      filters: { release_date: { lte: $date } }
      sort: "release_date:desc"
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }

    upcomingGames: games(
      pagination: { limit: 8 }
      filters: { release_date: { gt: $date } }
      sort: "release_date:asc"
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }

    freeGames: games(
      pagination: { limit: 8 }
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }

    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          freeGames {
            title
            highlight {
              ...HighlightFragment
            }
          }

          popularGames {
            title
            highlight {
              ...HighlightFragment
            }

            games(pagination: { limit: 8 }) {
              data {
                id
                attributes {
                  ...GameFragment
                }
              }
            }
          }
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`;
