import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  display: block;
  color: #3470ff;
  background-color: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  padding: 12px;
  margin: 0 auto 100px;
  &:hover {
    transform: scale(1.2);
    text-decoration-line: none;
  }
`;
