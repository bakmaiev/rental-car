import React, { useState, useEffect } from "react";
import {
  StyledBtn,
  StyledIcon,
  StyledInput,
  StyledWrapper,
} from "./Select.styled";
import Menu from "./Menu";

const CustomSelect = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelectedItemChange = (selectedItem) => {
    setValue(selectedItem);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <StyledWrapper>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <StyledBtn type="button" onClick={() => setIsOpen(!isOpen)}>
        <StyledIcon size={20} />
      </StyledBtn>
      {isOpen && (
        <Menu
          options={options}
          value={value}
          onSelectedItemChange={handleSelectedItemChange}
        />
      )}
    </StyledWrapper>
  );
};

export default CustomSelect;
