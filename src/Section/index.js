import { Header, Title, SectionStyle, Body } from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionStyle>
    <Header>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </SectionStyle>
);

export default Section;