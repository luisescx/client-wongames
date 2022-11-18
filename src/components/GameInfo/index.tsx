import { FavoriteBorder } from "@styled-icons/material-outlined";
import CartButton from "components/CartButton";
import Button from "components/Button";
import Heading from "components/Heading";
import Ribbon from "components/Ribbon";
import formatPrice from "utils/format-price";
import * as S from "./styles";

export type GameInfoProps = {
  id: string;
  title: string;
  description: string;
  price: number;
};

const GameInfo = ({ id, description, price, title }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black">
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText />

      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
);

export default GameInfo;
