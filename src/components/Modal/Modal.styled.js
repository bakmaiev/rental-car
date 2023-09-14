import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
`;

export const StyledModal = styled.div`
  position: relative;
  max-width: 541px;
  height: 752px;
  padding: 40px;
  border-radius: 24px;
  background: #fff;

  @media screen and (max-width: 767px) {
    .modal {
      width: 100%;
      max-width: 335px;
    }
  }

  @media screen and (max-width: 1023px) {
    .modal {
      width: 350px;
    }
  }
`;

export const StyledImgWrapper = styled.div`
  position: "relative";
  width: 100%;
  margin-bottom: 14px;
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  width: 461px;
  height: 248px;
  border-radius: 14px;
`;

export const StyledPrimaryBlock = styled.div`
  display: flex;
  max-width: 277px;
  flex-direction: column;
  gap: 8px;
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
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #445c84;
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
