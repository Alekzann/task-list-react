import styled from "styled-components";

export const ButtonsContainer = styled.span`
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  font-size: 18px;
  color: hsl(180, 100%, 25%);
  transition: 0.3s;
  margin: 20px;

  @media (max-width: 767px) {
    display: grid;
  }

  &:hover {
    color: rgba(0, 128, 128, 0.8);
  }

  &:disabled {
    color: hsl(180, 3%, 71%);
  }
`;
