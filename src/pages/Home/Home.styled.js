import styled from "styled-components";

export const StyledHomeSection = styled.section`
  padding: 0 16px;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const StyledImg = styled.img`
  max-width: 60%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50px;
  color: #fff;
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const StyledFeaturesTitle = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const StyledHomeDescr = styled.p`
  text-align: center;
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
