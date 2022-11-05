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
