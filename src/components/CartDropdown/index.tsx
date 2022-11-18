import * as S from "./styles";
import CartList from "components/CartList";
import Dropdown from "components/Dropdown";
import CartIcon from "components/CartIcon";

const CartDropdown = () => (
  <S.Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList hasButton />
    </Dropdown>
  </S.Wrapper>
);

export default CartDropdown;
