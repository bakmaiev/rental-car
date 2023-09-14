import React, { useMemo } from "react";
import Card from "../Card/Card";
import { StyledList } from "./CarsList.styled";

const CarsList = ({ cars }) => {
  return (
    <StyledList>
      {cars.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </StyledList>
  );
};

export default CarsList;
