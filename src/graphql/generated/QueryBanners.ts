/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BannerFiltersInput, PaginationArg, PublicationState, ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryBanners
// ====================================================

export interface QueryBanners_banners_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryBanners_banners_data_attributes_image_data {
  __typename: "UploadFileEntity";
  attributes: QueryBanners_banners_data_attributes_image_data_attributes | null;
}

export interface QueryBanners_banners_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: QueryBanners_banners_data_attributes_image_data | null;
}

export interface QueryBanners_banners_data_attributes_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryBanners_banners_data_attributes_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface QueryBanners_banners_data_attributes {
  __typename: "Banner";
  image: QueryBanners_banners_data_attributes_image;
  title: string;
  subtitle: string;
  button: QueryBanners_banners_data_attributes_button | null;
  ribbon: QueryBanners_banners_data_attributes_ribbon | null;
}

export interface QueryBanners_banners_data {
  __typename: "BannerEntity";
  attributes: QueryBanners_banners_data_attributes | null;
}

export interface QueryBanners_banners {
  __typename: "BannerEntityResponseCollection";
  data: QueryBanners_banners_data[];
}

export interface QueryBanners {
  banners: QueryBanners_banners | null;
}

export interface QueryBannersVariables {
  filters?: BannerFiltersInput | null;
  pagination?: PaginationArg | null;
  sort?: (string | null)[] | null;
  publicationState?: PublicationState | null;
}
