import React from "react";
import { Link } from "react-router-dom";
import {
  StyledContainer,
  StyledHeader,
  StyledLogoLink,
  StyledLogoTitle,
  StyledLogoWrapper,
  StyledNavigationLink,
  StyledNavigationList,
} from "./Header.styled";
import { MdCarRental } from "react-icons/md";

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogoWrapper>
          <StyledLogoLink to="/">
            <StyledLogoTitle>Rental Car</StyledLogoTitle>
            <MdCarRental size={40} />
          </StyledLogoLink>
        </StyledLogoWrapper>
        <StyledNavigationList>
          <li>
            {" "}
            <StyledNavigationLink to="/catalog">Catalog</StyledNavigationLink>
          </li>
          <li>
            <StyledNavigationLink to="/favorites">
              Favorites
            </StyledNavigationLink>
          </li>
        </StyledNavigationList>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
