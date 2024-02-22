import { List, ListWrapper, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <nav>
    <ListWrapper>
      <List>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </List>
      <List>
        <StyledNavLink to="/author">O autorze</StyledNavLink>
      </List>
    </ListWrapper>
  </nav>
  );
};

export default Navigation;