import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid rgb(170, 163, 163);
  border-radius: ${({ theme }) => theme.borderRadius.borderRadius}px;
  padding: 10px;
`;
