import { gql } from "@apollo/client";

export const QUERY_BANNERS = gql`
  query QueryBanners(
    $filters: BannerFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $publicationState: PublicationState
  ) {
    banners(
      filters: $filters
      pagination: $pagination
      sort: $sort
      publicationState: $publicationState
    ) {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }

          title
          subtitle
          button {
            label
            link
          }

          ribbon {
            text
            color
            size
          }
        }
      }
    }
  }
`;
