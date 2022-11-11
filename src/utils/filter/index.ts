/* eslint-disable @typescript-eslint/no-explicit-any */
import { ParsedUrlQueryInput } from "querystring";

type ParseArgs = {
  queryString: ParsedUrlQueryInput;
  filterItems: any;
};

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  const obj: any = {};

  Object.keys(queryString)
    .filter((item) => item !== "sort")
    .forEach((key) => {
      const item = filterItems?.find((item: any) => item.name === key);
      const isCheckbox = item?.type === "checkbox";

      obj[key] = !isCheckbox
        ? queryString[key]
        : { name_contains: queryString[key] };
    });

  return obj;
};

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  const obj: any = {};

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item: any) => item.name === key);
    const isCheckbox = item?.type === "checkbox";
    const isArray = Array.isArray(queryString[key]);

    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key];
  });

  return obj;
};
