import React, { useState } from "react";
import { StyledItem, StyledMenu } from "./Select.styled";

const Menu = ({ options, onChange, value, onSelectedItemChange }) => {
  const filteredItems = options.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  const handleSelectedItem = (item) => {
    onSelectedItemChange(item);
  };

  return (
    <StyledMenu>
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => {
          return (
            <li key={item}>
              <button type="button" onClick={() => handleSelectedItem(item)}>
                <StyledItem>{item}</StyledItem>
              </button>
            </li>
          );
        })
      ) : (
        <StyledItem>Unfortunately, such cars are not available</StyledItem>
      )}
    </StyledMenu>
  );
};

export default Menu;
