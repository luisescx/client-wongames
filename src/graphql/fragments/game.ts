import { gql } from "@apollo/client";

export const GameFragment = gql`
  fragment GameFragment on Game {
    name
    slug
    price
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
  }
`;
