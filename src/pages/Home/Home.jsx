import React from "react";
import {
  StyledFeaturesTitle,
  StyledHomeDescr,
  StyledHomeSection,
  StyledImg,
  StyledInfo,
  StyledWrapper,
} from "./Home.styled";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog", { replace: true });
  };
  return (
    <StyledHomeSection>
      <StyledWrapper onClick={handleClick}>
        <StyledImg src={require("../../images/1.jpg")} alt="car" />
        <StyledInfo>
          <StyledFeaturesTitle>User-Friendly Interface</StyledFeaturesTitle>
          <StyledHomeDescr>
            Our app boasts an intuitive and user-friendly interface that ensures
            a seamless experience from start to finish. Easily navigate through
            various options and settings, making the car rental process a breeze
            for both newcomers and experienced travelers.
          </StyledHomeDescr>
        </StyledInfo>
      </StyledWrapper>
      <StyledWrapper onClick={handleClick}>
        <StyledInfo>
          <StyledFeaturesTitle>24/7 Customer Support:</StyledFeaturesTitle>
          <StyledHomeDescr>
            Travel emergencies can happen at any time. Our dedicated customer
            support team is available around the clock to assist you with any
            inquiries or issues that may arise during your rental experience.
          </StyledHomeDescr>
        </StyledInfo>
        <StyledImg src={require("../../images/2.jpg")} alt="car" />
      </StyledWrapper>
      <StyledWrapper onClick={handleClick}>
        <StyledImg src={require("../../images/3.jpg")} alt="car" />
        <StyledInfo>
          <StyledFeaturesTitle>Large Fleet:</StyledFeaturesTitle>
          <StyledHomeDescr>
            Choose from a wide range of vehicles, from compact cars for city
            excursions to spacious SUVs for family adventures. With options for
            every budget, you'll find the perfect vehicle to suit your needs.
          </StyledHomeDescr>
        </StyledInfo>
      </StyledWrapper>
      <StyledWrapper onClick={handleClick}>
        <StyledInfo>
          <StyledFeaturesTitle>Booking Flexibility:</StyledFeaturesTitle>
          <StyledHomeDescr>
            Plan your trip with confidence. Reserve a car for a few hours, a
            day, a week, or even longer. Our app offers flexible booking options
            that adapt to your schedule, giving you the freedom to explore at
            your own pace.
          </StyledHomeDescr>
        </StyledInfo>
        <StyledImg src={require("../../images/4.jpg")} alt="car" />
      </StyledWrapper>
    </StyledHomeSection>
  );
};

export default Home;
