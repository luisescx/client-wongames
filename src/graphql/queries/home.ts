import { gql } from "@apollo/client";
import { BannerFragment } from "graphql/fragments/banner";

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
          ...BannerFragment
        }
      }
    }
  }

  ${BannerFragment}
`;
