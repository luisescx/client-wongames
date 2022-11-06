import { gql } from "@apollo/client";
import { GameFragment } from "graphql/fragments/game";
import { HighlightFragment } from "graphql/fragments/highlight";

export const QUERY_UPCOMING = gql`
  query QueryUpcoming($date: Date!) {
    upcomingGames: games(
      pagination: { limit: 8 }
      filters: { release_date: { gt: $date } }
      sort: "release_date:asc"
    ) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }

    showcase: home {
      data {
        attributes {
          upcomingGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }
  ${GameFragment}
  ${HighlightFragment}
`;
