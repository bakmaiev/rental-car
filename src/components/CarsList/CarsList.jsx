import React, { useMemo } from "react";
import Card from "../Card/Card";

const CarsList = ({ cars }) => {
  return (
    <div>
      {cars.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarsList;
