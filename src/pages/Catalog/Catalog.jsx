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
import Filter from "../../components/Filter/Filter";
import {
  selectBrandFilter,
  selectFromFilter,
  selectPriceFilter,
  selectToFilter,
} from "../../redux/filter/selectors";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const totalItems = useSelector(selectTotalItems);
  const brandsFilter = useSelector(selectBrandFilter);
  const priceFilter = useSelector(selectPriceFilter);
  const fromFilter = useSelector(selectFromFilter);
  const toFilter = useSelector(selectToFilter);

  const isMoreItems = () => totalItems > page * perPage;

  const handleLoadMore = () => {
    if (isMoreItems()) {
      dispatch(updatePage());
    }
  };

  const filteredCars = cars.filter((car) => {
    return (
      car.make === brandsFilter &&
      parseInt(car.rentalPrice.substring(1)) >= parseInt(priceFilter) &&
      car.mileage > fromFilter &&
      car.mileage < toFilter
    );
  });

  const renderCars = () => {
    if (filteredCars.length > 0) {
      return filteredCars;
    } else {
      return cars;
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
        <Filter />
        {renderCars().length > 0 && <CarsList cars={renderCars()} />}
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
