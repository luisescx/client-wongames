import { Menu as MenuIcon } from "@styled-icons/material-outlined";
import { Search as SearchIcon } from "@styled-icons/material-outlined";
import { useState } from "react";
import { Close as CloseIcon } from "@styled-icons/material-outlined/Close";
import Button from "components/Button";
import MediaMatch from "components/MediaMatch";
import Logo from "components//Logo";
import * as S from "./styles";
import CartDropdown from "components/CartDropdown";
import CartIcon from "components/CartIcon";
import UserDropdown from "components/UserDropdown";
import Link from "next/link";

export type MenuProps = {
  username?: string | null;
  loading?: boolean;
};

const Menu = ({ username, loading }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>

          <Link href="/games" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      {!loading && (
        <S.MenuGroup>
          <S.IconWrapper>
            <MediaMatch greaterThan="medium">
              <CartDropdown />
            </MediaMatch>

            <MediaMatch lessThan="medium">
              <Link href="/cart">
                <a>
                  <CartIcon />
                </a>
              </Link>
            </MediaMatch>
          </S.IconWrapper>

          <S.IconWrapper>
            <SearchIcon aria-label="search" />
          </S.IconWrapper>

          {!username ? (
            <MediaMatch greaterThan="medium">
              <Link href="/sign-in" passHref>
                <Button as="a">Sign in</Button>
              </Link>
            </MediaMatch>
          ) : (
            <UserDropdown username={username} />
          )}
        </S.MenuGroup>
      )}

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>

          {!!username && (
            <>
              <Link href="/profile/me" passHref>
                <S.MenuLink>My profile</S.MenuLink>
              </Link>
              <Link href="/profile/wishlist" passHref>
                <S.MenuLink>Wishlist</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
