import { HeaderStyle } from "./styled.js"

const Header = ({ title }) => (
  <HeaderStyle>
    <h1>
      {title}
    </h1>
  </HeaderStyle>
)

export default Header;