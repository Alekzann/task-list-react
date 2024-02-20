import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  background: transparent;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondaryColor};
  transition: 0.3s;
  margin: 20px;

  button[disabled] {
    opacity: 0;
    cursor: not-allowed;
    pointer-events: none;
    color: red;
  }

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

export const ButtonsContainer = styled.span`
  justify-content: space-between;
  align-items: center;
`;
