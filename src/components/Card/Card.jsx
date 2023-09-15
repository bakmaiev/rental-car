import React, { useState } from "react";
import {
  StyledIconBtn,
  StyledImg,
  StyledImgWrapper,
  StyledInfoBlock,
  StyledInfoWrapper,
  StyledItem,
  StyledLearnMoreBtn,
  StyledPrimaryList,
  StyledSecondaryList,
  StyledSecondaryText,
  StyledText,
} from "./Card.styled";
import Modal from "../Modal/Modal";

const Card = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
    favorite,
    rentalConditions,
    mileage,
    functionalities,
    description,
  } = car;
  const newArray = address.split(",");
  const country = newArray.slice(-1).join(",").trim();
  const city = newArray[newArray.length - 2].trim();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <StyledItem>
      <StyledInfoWrapper>
        <StyledImgWrapper>
          <StyledImg src={img} alt={`${make} ${model}`} />
          <StyledIconBtn type="button"></StyledIconBtn>
        </StyledImgWrapper>
        <StyledInfoBlock>
          <StyledPrimaryList>
            <StyledText>
              {make} {model}, {year}
            </StyledText>
            <StyledText>{rentalPrice}</StyledText>
          </StyledPrimaryList>
          <StyledSecondaryList>
            <StyledSecondaryText>{city}</StyledSecondaryText>
            <StyledSecondaryText>{country}</StyledSecondaryText>
            <StyledSecondaryText>{rentalCompany}</StyledSecondaryText>
            <StyledSecondaryText>{type}</StyledSecondaryText>
            <StyledSecondaryText>{id}</StyledSecondaryText>
            <StyledSecondaryText>{accessories[0]}</StyledSecondaryText>
          </StyledSecondaryList>
          {isModalOpen && (
            <Modal
              onClose={toggleModal}
              key={id}
              model={model}
              make={make}
              year={year}
              rentalPrice={rentalPrice}
              address={address}
              rentalCompany={rentalCompany}
              functionalities={functionalities}
              id={id}
              type={type}
              img={img}
              accessories={accessories}
              mileage={mileage}
              description={description}
              rentalConditions={rentalConditions}
            />
          )}
        </StyledInfoBlock>
      </StyledInfoWrapper>
      <StyledLearnMoreBtn onClick={toggleModal}>Learn more</StyledLearnMoreBtn>
    </StyledItem>
  );
};

export default Card;
