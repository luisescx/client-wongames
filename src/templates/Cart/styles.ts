import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    margin: ${theme.spacings.large} 0;
    grid-gap: ${theme.spacings.large};

    ${media.greaterThan("medium")`
      grid-template-columns: repeat(2, 1fr); 
    `}
  `}
`;
