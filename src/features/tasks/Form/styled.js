import styled from "styled-components";

export const FormStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  border: 1px solid rgb(170, 163, 163);
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius}px;
  padding: 10px;
`;

export const Button = styled.button`
  border-style: none;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: aliceblue;
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius}px;
  padding: 10px 20px;
  transition: 0.3s;

  &:hover {
    background-color: hsl(180, 100%, 28%);
    transform: scale(1.03);
  }

  &:active {
    outline: 1px solid teal;
  }
`;
