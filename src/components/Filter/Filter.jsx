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

const Filter = ({ onSearchClick }) => {
  const dispatch = useDispatch();
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");

  const brandList = brands;
  const priceList = generatePriceList();

  const handleBrandChange = (value) => {
    setBrand(value);
    dispatch(setBrandFilter(brand));
  };
  const handlePriceChange = (value) => {
    setPrice(value);
    dispatch(setPriceFilter(price));
  };
  const handleFromChange = (value) => {
    setFrom(value);
    dispatch(setFromFilter(from));
  };
  const handleToChange = (value) => {
    setTo(value);
    dispatch(setToFilter(to));
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
      <StyledButton type="button">Search</StyledButton>
    </StyledForm>
  );
};

export default Filter;
