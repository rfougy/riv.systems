import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem;

  background-color: rgba(0, 0, 0, 0.2);
  border: solid rgba(255, 255, 255, 0.5) 0.1rem;
  border-radius: 2vh;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
`;

export const Title = styled.h1`
  line-height: 100%;
  text-align: start;

  width: 100%;
  margin: 0;
`;
