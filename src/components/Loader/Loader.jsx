import React from "react";
import { Oval } from "react-loader-spinner";
import { StyledLoader } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoader>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="#121417"
        secondaryColor="white"
      />
    </StyledLoader>
  );
};

export default Loader;
