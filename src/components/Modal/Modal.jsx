import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  StyledActionBtn,
  StyledBackdrop,
  StyledCloseBtn,
  StyledImg,
  StyledImgWrapper,
  StyledInfoTitle,
  StyledModal,
  StyledPrimaryBlock,
  StyledPrimaryDescr,
  StyledPrimaryList,
  StyledRentalInfo,
  StyledSecondaryBlock,
  StyledSecondaryList,
  StyledSecondaryText,
  StyledText,
} from "./Modal.styled";
import { AiOutlineClose } from "react-icons/ai";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({
  onClose,
  id,
  year,
  make,
  model,
  type,
  img,
  accessories,
  description,
  rentalPrice,
  rentalCompany,
  address,
  favorite,
  mileage,
  functionalities,
  rentalConditions,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const newArray = address.split(",");
  const country = newArray.slice(-1).join(",").trim();
  const city = newArray[newArray.length - 2].trim();
  const rentalConditionsSplitted = rentalConditions.split("\n");

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <StyledBackdrop onClick={handleBackdropClick}>
      <StyledModal>
        <StyledCloseBtn onClick={onClose} className="close-button">
          <AiOutlineClose size={24} />
        </StyledCloseBtn>
        <StyledImgWrapper>
          <StyledImg src={img} alt={`${make} ${model}`} />
        </StyledImgWrapper>
        <StyledPrimaryBlock>
          <StyledPrimaryList>
            <StyledText>
              {make} {model}, {year}
            </StyledText>
          </StyledPrimaryList>
          <StyledSecondaryList>
            <StyledSecondaryText>{city}</StyledSecondaryText>
            <StyledSecondaryText>{country}</StyledSecondaryText>
            <StyledSecondaryText>{rentalCompany}</StyledSecondaryText>
            <StyledSecondaryText>{type}</StyledSecondaryText>
            <StyledSecondaryText>{id}</StyledSecondaryText>
            <StyledSecondaryText>{accessories[0]}</StyledSecondaryText>
          </StyledSecondaryList>
        </StyledPrimaryBlock>
        <StyledPrimaryDescr>{description}</StyledPrimaryDescr>
        <StyledSecondaryBlock>
          <StyledInfoTitle>Accessories and functionalities:</StyledInfoTitle>
          <StyledSecondaryList>
            {accessories.map((accessory, index) => (
              <StyledSecondaryText key={index}>{accessory}</StyledSecondaryText>
            ))}
            {functionalities.map((functionality, index) => (
              <StyledSecondaryText key={index}>
                {functionality}
              </StyledSecondaryText>
            ))}
          </StyledSecondaryList>
        </StyledSecondaryBlock>
        <StyledSecondaryBlock>
          <StyledInfoTitle>Rental Conditions:</StyledInfoTitle>
          <StyledSecondaryList>
            {rentalConditionsSplitted.map((rentalConditions, index) => (
              <StyledRentalInfo key={index}>
                {rentalConditions}
              </StyledRentalInfo>
            ))}
            <StyledRentalInfo>Mileage: {mileage}</StyledRentalInfo>
            <StyledRentalInfo>Price: {rentalPrice}</StyledRentalInfo>
          </StyledSecondaryList>
        </StyledSecondaryBlock>
        <StyledActionBtn onClick={onClose}>Rental car</StyledActionBtn>
      </StyledModal>
    </StyledBackdrop>,
    modalRoot
  );
};

export default Modal;
