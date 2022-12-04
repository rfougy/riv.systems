import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
`;

export const Description = styled.p`
  text-align: center;
`;

export const Margin = styled.div`
  margin: 2rem;
`;

export const Button = styled.button`
  border: none;
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: #000000;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;
