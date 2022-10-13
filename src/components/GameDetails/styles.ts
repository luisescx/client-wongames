import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.small};
    grid-template-columns: repeat(2, 1fr);

    ${media.greaterThan("medium")`
      grid-template-columns: repeat(3, 1fr);
    `}

    ${media.greaterThan("huge")`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`;

export const Block = styled.div``;

export const Label = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    font-weight: ${theme.font.light};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
  `}
`;

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const Icon = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
  `}
`;
