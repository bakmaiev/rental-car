import React from "react";
import CarsList from "../../components/CarsList/CarsList";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/cars/selectors";

const Favorites = () => {
  const favoriteCars = useSelector(selectFavorites);
  return <CarsList cars={favoriteCars} />;
};

export default Favorites;
