import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  icon?: React.ReactNode;
} & ButtonTypes;

const Button = ({
  children,
  icon,
  size = "medium",
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
