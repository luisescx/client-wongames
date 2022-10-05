import styled, { css } from "styled-components";
import { RadioProps } from ".";

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    height: 1.8rem;
    width: 1.8rem;
    align-items: center;
    display: flex;
    justify-content: center;
    appearance: none;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    position: relative;
    outline: none;
    background: transparent;
    transition: background ${theme.transition.fast};

    &:before {
      content: "";
      width: 0.8rem;
      height: 0.8rem;
      background: ${theme.colors.primary};
      position: absolute;
      opacity: 0;
      border-radius: 50%;
      transition: opacity ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<Pick<RadioProps, "labelColor">>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1.8rem;
  `}
`;
