import * as S from "./styles";
import CartList from "components/CartList";
import Dropdown from "components/Dropdown";
import { GameItemProps } from "components/GameItem";
import CartIcon from "components/CartIcon";

export type CartDropdownProps = {
  items?: GameItemProps[];
  total: string;
};

const CartDropdown = ({ total, items = [] }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items.length} />}>
      <CartList items={items} hasButton total={total} />
    </Dropdown>
  </S.Wrapper>
);

export default CartDropdown;
