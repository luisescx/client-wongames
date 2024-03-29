import styled, { css } from "styled-components";

import { lighten } from "polished";

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.black};
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    text-align: right;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`;
