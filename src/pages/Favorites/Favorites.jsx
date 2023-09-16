import React from "react";
import CarsList from "../../components/CarsList/CarsList";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/cars/selectors";
import { StyledDescription } from "./Favorites.styled";

const Favorites = () => {
  const favoriteCars = useSelector(selectFavorites);
  const isFavoriteCars = () => favoriteCars.length > 0;
  return (
    <>
      {isFavoriteCars() ? (
        <CarsList cars={favoriteCars} />
      ) : (
        <StyledDescription>
          There are no favorite cars. Add them from the catalog.
        </StyledDescription>
      )}
    </>
  );
};

export default Favorites;
