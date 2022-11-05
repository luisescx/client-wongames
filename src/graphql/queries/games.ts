import { gql } from "@apollo/client";

export const QUERY_GAMES = gql`
  query QueryGames(
    $filters: GameFiltersInput
    $pagination: PaginationArg
    $sort: [String]
  ) {
    games(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        attributes {
          name
          slug
          cover {
            data {
              attributes {
                url
              }
            }
          }

          developers {
            data {
              attributes {
                name
              }
            }
          }

          price
        }
      }
    }
  }
`;

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGamesBySlug(
    $filters: GameFiltersInput
    $pagination: PaginationArg
    $sort: [String]
  ) {
    games(filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
