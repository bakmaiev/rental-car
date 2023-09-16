export const selectCars = (state) => state.cars.items;
export const selectIsLoading = (state) => state.cars.IsLoading;
export const selectError = (state) => state.cars.error;
export const selectCurrentPage = (state) => state.cars.page;
export const selectPerPage = (state) => state.cars.perPage;
export const selectFavorites = (state) => state.cars.favorites;
export const selectTotalItems = (state) => state.cars.totalItems;
