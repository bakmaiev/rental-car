import React, { useState } from "react";
import CustomSelect from "../Select/Select";
import { brands } from "../../helpers/brandList";
import { generatePriceList } from "../../helpers/generatePriceList";
import {
  StyledButton,
  StyledFilter,
  StyledFilterField,
  StyledFilterInput,
  StyledFilterLabel,
  StyledFilterWrap,
  StyledForm,
} from "./Filter.styled";
import { useDispatch } from "react-redux";
import {
  setBrandFilter,
  setFromFilter,
  setPriceFilter,
  setToFilter,
} from "../../redux/filter/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const brandList = brands;
  const priceList = generatePriceList();

  const handleBrandChange = (value) => {
    setBrand(value);
  };
  const handlePriceChange = (value) => {
    setPrice(value);
  };
  const handleFromChange = (value) => {
    setFrom(value);
  };
  const handleToChange = (value) => {
    setTo(value);
  };

  const handleClick = () => {
    dispatch(setBrandFilter(brand));
    dispatch(setPriceFilter(price));
    dispatch(setFromFilter(from));
    dispatch(setToFilter(to));
  };

  const handleResetClick = () => {
    dispatch(setBrandFilter(""));
    dispatch(setPriceFilter(""));
    dispatch(setFromFilter(null));
    dispatch(setToFilter(null));
  };

  return (
    <StyledForm>
      <div>
        <StyledFilterLabel>Car brand</StyledFilterLabel>
        <CustomSelect
          options={brandList}
          placeholder={"Enter the text"}
          onChange={handleBrandChange}
        />
      </div>

      <div style={{ width: 125 }}>
        <StyledFilterLabel>Price/ 1 hour</StyledFilterLabel>
        <CustomSelect
          options={priceList}
          placeholder={"To $"}
          onChange={handlePriceChange}
        />
      </div>

      <StyledFilter>
        <StyledFilterLabel>Car mileage / km</StyledFilterLabel>
        <StyledFilterWrap>
          <StyledFilterField>
            <StyledFilterInput
              type="number"
              placeholder="From"
              onChange={(e) => handleFromChange(e.target.value)}
            />
          </StyledFilterField>
          <StyledFilterField>
            <StyledFilterInput
              type="number"
              placeholder="To"
              onChange={(e) => handleToChange(e.target.value)}
            />
          </StyledFilterField>
        </StyledFilterWrap>
      </StyledFilter>
      <StyledButton onClick={handleClick} type="button">
        Search
      </StyledButton>
      <StyledButton onClick={handleResetClick} type="reset">
        Reset
      </StyledButton>
    </StyledForm>
  );
};

export default Filter;
