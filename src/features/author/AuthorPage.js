import Container from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

const AuthorPage = () => (
  <Container>
    <Header title="Lista zadań" />
    <Section title="Oleksandr Riaboshapka" body={<>Tutaj ma być jakiś tekst. </>}/>
    
  </Container>
);

export default AuthorPage;