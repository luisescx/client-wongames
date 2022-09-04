import * as S from "./styles";

export type RibbonColors = "primary" | "secondary";
export type RibbonSizes = "normal" | "small";

export type RibbonProps = {
  color?: RibbonColors;
  size?: RibbonSizes;
  children: React.ReactNode;
};

const Ribbon = ({
  color = "primary",
  size = "normal",
  children
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
);

export default Ribbon;
