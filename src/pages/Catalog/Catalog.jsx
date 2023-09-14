import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectError,
  selectIsLoading,
} from "../../redux/cars/selectors";
import { getCars } from "../../redux/cars/operations";
import CarsList from "../../components/CarsList/CarsList";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      <CarsList cars={cars} />
    </>
  );
};

export default Catalog;
