import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectPerPage,
} from "../../redux/cars/selectors";
import { getCars } from "../../redux/cars/operations";
import CarsList from "../../components/CarsList/CarsList";
import Loader from "../../components/Loader/Loader";
import { updatePage } from "../../redux/cars/carsSlice";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);

  const handleLoadMore = () => {
    dispatch(updatePage(page + 1));
  };

  useEffect(() => {
    dispatch(getCars({ page, perPage }));
  }, [dispatch, page, perPage]);

  return (
    <>
      {isLoading && !error && <Loader />}
      <CarsList cars={cars} />
      <button type="button" onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
};

export default Catalog;
