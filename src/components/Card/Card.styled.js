import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";

export const StyledItem = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  gap: 28px;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  width: 274px;
  flex-direction: column;
  gap: 14px;
`;

export const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledImgWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  width: 274px;
  height: 268px;
  border-radius: 14px;
`;

export const StyledIconBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  background-color: transparent;
`;

export const StyledPrimaryList = styled.ul`
  display: flex;
`;

export const StyledText = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 16px;
  line-height: 24px;
`;

export const StyledLearnMoreBtn = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #00bfff;
  }
`;

export const StyledSecondaryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 4px;
`;

export const StyledSecondaryText = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 4px;
  &:last-child {
    border-right: none;
  }
`;

export const StyledIcon = styled(AiOutlineHeart)`
  width: 18px;
  height: 18px;
  color: #ffffffcc;
`;

export const StyledFavoriteIcon = styled(AiFillHeart)`
  width: 18px;
  height: 18px;
  color: #3470ff;
`;
