import { toAuthor, toTasks } from "../routes";
import { List, ListWrapper, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <nav>
    <ListWrapper>
      <List>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
      </List>
      <List>
        <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
      </List>
    </ListWrapper>
  </nav>
  );
};

export default Navigation;