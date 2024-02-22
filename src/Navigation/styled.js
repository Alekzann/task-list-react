import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &.active {
    font-weight: 700;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  list-style-type: none;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 15px 0px;
`;

export const List = styled.li`
  list-style: none;
  text-decoration: none;
  margin: 0 20px;
  color: white;

  
`;
