import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";

export const StyledMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  position: absolute;
  top: 110%;
  left: 0;

  width: 86%;
  height: 272px;
  padding: 14px 18px;

  overflow-y: scroll;
  overflow-x: hidden;

  z-index: 1;

  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  background-color: #ffffff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  &::-webkit-scrollbar {
    padding-right: 20px;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #1214170d;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 14px 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
`;

export const StyledBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const StyledIcon = styled(AiOutlineDown)`
  transform: rotate(180deg);
`;

export const StyledItem = styled.span`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
