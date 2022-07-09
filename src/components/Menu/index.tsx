import { Menu as MenuIcon } from "@styled-icons/material-outlined";
import { ShoppingCart as ShoppingCartIcon } from "@styled-icons/material-outlined";
import { Search as SearchIcon } from "@styled-icons/material-outlined";
import Logo from "../Logo";

import * as S from "./styles";

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon aria-label="Open Menu" />
    </S.IconWrapper>

    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>

    <S.MenuGroup>
      <S.IconWrapper>
        <ShoppingCartIcon aria-label="Open shopping cart" />
      </S.IconWrapper>

      <S.IconWrapper>
        <SearchIcon aria-label="search" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
);

export default Menu;
