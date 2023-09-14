import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  StyledBackdrop,
  StyledImg,
  StyledImgWrapper,
  StyledModal,
  StyledPrimaryBlock,
  StyledPrimaryList,
  StyledSecondaryList,
  StyledSecondaryText,
  StyledText,
} from "./Modal.styled";

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
  rentalPrice,
  rentalCompany,
  address,
  favorite,
  mileage,
  functionalities,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const newArray = address.split(",");
  const country = newArray.slice(-1).join(",").trim();
  const city = newArray[newArray.length - 2].trim();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <StyledBackdrop onClick={handleBackdropClick}>
      <StyledModal>
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
      </StyledModal>
    </StyledBackdrop>,
    modalRoot
  );
};

export default Modal;
