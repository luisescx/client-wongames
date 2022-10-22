import styled, { css, DefaultTheme } from "styled-components";
import * as ButtonStyles from "components/Button/styles";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemStyles = (theme: DefaultTheme) => css`
  background: ${theme.colors.lightGray};
  height: 5rem;
  display: flex;
  border-radius: 0.2rem;
  padding: ${theme.spacings.xxsmall};
  align-items: center;
  color: ${theme.colors.black};
  cursor: pointer;
`;

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemStyles(theme)}
    justify-content: space-between;

    margin-bottom: ${theme.spacings.xxsmall};
    &:not(:last-child) {
    }
  `}
`;

export const CardInfo = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
      width: 2.4rem;
    }
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    display: flex;
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    align-items: center;

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`;
