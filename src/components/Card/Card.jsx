import React, { useState } from "react";
import {
  StyledFavoriteIcon,
  StyledIcon,
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
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/cars/selectors";
import { removeFavorite, setFavorite } from "../../redux/cars/carsSlice";

const Card = ({ car }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    rentalConditions,
    mileage,
    functionalities,
    description,
  } = car;
  const newArray = address.split(",");
  const country = newArray.slice(-1).join(",").trim();
  const city = newArray[newArray.length - 2].trim();
  const favoriteCars = useSelector(selectFavorites);
  const isFavorite = favoriteCars.find((car) => car.id === id);

  const handleFavoriteBtn = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(setFavorite(car));
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <StyledItem>
      <StyledInfoWrapper>
        <StyledImgWrapper>
          <StyledImg src={img} alt={`${make} ${model}`} />
          <StyledIconBtn type="button" onClick={handleFavoriteBtn}>
            {isFavorite ? <StyledFavoriteIcon /> : <StyledIcon />}
          </StyledIconBtn>
        </StyledImgWrapper>
        <StyledInfoBlock>
          <StyledPrimaryList>
            <StyledText>
              <span>{make} </span>
              {model && <span>{model},</span>}
              <span>{year}</span>
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
