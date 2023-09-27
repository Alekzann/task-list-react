import {ContainerStyle} from "./styled.js";

const Container = ({ children }) => (
  <ContainerStyle>
    {children}
  </ContainerStyle>
);

export default Container;