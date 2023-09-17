import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1184px;
  padding: 0 16px;
  margin: 0 auto;
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: 500;
`;

export const StyledNavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
  @media (max-width: 767px) {
    gap: 30px;
  }
  @media (max-width: 374px) {
    gap: 10px;
  }
`;

export const StyledNavigationLink = styled(NavLink)`
  display: block;

  position: relative;

  width: fit-content;
  padding-top: 40px;
  padding-bottom: 40px;

  font-size: 18px;
  font-weight: 500;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);


	
&::before {
	content: '';
	position: absolute;
	top: 64%;
	width: 100%;
	height: 1px;
	background-color: #000;
	transform: scaleX(0);
	transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	&:hover::before {
		transform: scaleX(1);
	}	
}
`;

export const StyledLogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 374px) {
    gap: 0px;
  }
`;

export const StyledLogoTitle = styled.h1`
  color: #121417;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
