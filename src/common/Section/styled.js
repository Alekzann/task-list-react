import styled from "styled-components";

export const SectionStyle = styled.section`
  max-width: 1000px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  box-shadow: 1px -1px 0px 0px rgba(227, 227, 232, 0.62);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eee;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Title = styled.h2`
  padding-left: 20px;
  justify-self: flex-start;
`;

export const Body = styled.div`
  padding: 20px;
`;
