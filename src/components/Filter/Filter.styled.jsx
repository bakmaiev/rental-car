import styled from "styled-components";

export const StyledFilterWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledFilterField = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  height: 48px;
  padding: 0px 24px;
  background-color: #f7f7fb;

  &:nth-child(1) {
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  &:nth-child(2) {
    border-radius: 0px 14px 14px 0px;
  }
`;

export const StyledFilterInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--main-text-clr);
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: end;
  gap: 18px;

  width: fit-content;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const StyledFilter = styled.div``;

export const StyledFilterLabel = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #8a8a89;
`;

export const StyledButton = styled.button`
  display: flex;
  width: 136px;
  height: 48px;
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
    background: #121417;
    transform: scale(1.1);
  }
`;
