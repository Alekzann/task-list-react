
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Div } from "./styled";

const AuthorPage = () => (
  <>
    <Header title="O Autorze" />
    <Section
      title="Oleksandr Riaboshapka"
      body={
        <>
          <Div>
            <p>
              Jeszcze po gimnazium rozważałem nad tym by pójść w programowanie,
              ale również lubiłem samochody, myśliałem że będzie to moją pasją,
              ale nie powiodło się, po 10 latach przypomniałem sobie że jeszcze
              nie jest za póżno by jednak spróbować siebie w programowaniu, więc
              postanowiłem że <strong>JavaScript </strong> przyprowadzi mnie do
              celu. Wreście, jestem już prawie na samym szczyciku(można
              powiedzieć że "dorosłem by otworzyć drzwi do światu
              programowania", jest to bardzo ekscytujące). Wiem że moja nauka
              dopiero się zaczyna, ale już nie mogę się doczekać pierwszej
              pracy🤞.
            </p>
          </Div>
        </>
      }
    />
  </>
);

export default AuthorPage;
