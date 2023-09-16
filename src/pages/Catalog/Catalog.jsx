import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectPerPage,
  selectTotalItems,
} from "../../redux/cars/selectors";
import { getCars, getTotal } from "../../redux/cars/operations";
import CarsList from "../../components/CarsList/CarsList";
import Loader from "../../components/Loader/Loader";
import { updatePage } from "../../redux/cars/carsSlice";
import { StyledLoadMoreBtn } from "./Catalog.styled";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const totalItems = useSelector(selectTotalItems);
  const isMoreItems = () => totalItems > page * perPage;

  const handleLoadMore = () => {
    if (isMoreItems()) {
      dispatch(updatePage());
    }
  };

  useEffect(() => {
    dispatch(getCars({ page, perPage }));
    dispatch(getTotal());
  }, [dispatch, page, perPage]);

  return (
    <>
      {isLoading && !error && <Loader />}
      <section>
        {cars.length > 0 && <CarsList cars={cars} />}
        {isMoreItems() && (
          <StyledLoadMoreBtn type="button" onClick={handleLoadMore}>
            Load More
          </StyledLoadMoreBtn>
        )}
      </section>
    </>
  );
};

export default Catalog;
