import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 10px 25px;
  grid-gap: 20px 20px;
  align-items: center;
  border-bottom: 2px solid #eee;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `};
`;

export const Content = styled.span`
  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `};
`;

export const Button = styled.button`
  border-style: none;
  width: 30px;
  height: 30px;
  color: white;
  transition: 0.3s;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background: green;

      &:focus {
        outline: 1px solid rgb(48, 30, 30);
        border-radius: 3px;
      }
      &:hover {
        background-color: hsl(120, 100%, 29%);
      }
    `}
  ${({ $remove }) =>
    $remove &&
    css`
      background-color: red;

      &:hover {
        background-color: hsl(0, 100%, 65%);
      }
      &:focus {
        outline: 1px solid rgb(88, 55, 55);
        border-radius: 3px;
      }
    `}
`;
