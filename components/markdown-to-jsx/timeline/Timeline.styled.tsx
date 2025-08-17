import styled from "@emotion/styled";

export const Box = styled.div`
  position: relative;
  padding-left: 10rem;
`;

export const Line = styled.div`
  position: absolute;
  left: 8.5rem;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 0.1rem;
  background-color: ${(props: any) => props.theme.primary};
`;

export const Event = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
`;

export const Dot = styled.div<{ isCaseStudy?: string; theme?: any }>`
  position: absolute;
  left: ${(props) => (props.isCaseStudy ? "-1.95rem" : "-1.8rem")};
  top: 0.25rem;
  width: ${(props) => (props.isCaseStudy ? "1rem" : "0.75rem")};
  height: ${(props) => (props.isCaseStudy ? "1rem" : "0.75rem")};
  background-color: ${(props) => props.theme.primary};
  border-radius: 50%;
  border: 0.25rem solid ${(props) => props.theme.secondary};
  box-shadow: ${(props) =>
    props.isCaseStudy ? `0 0 0 0.1rem ${props.theme.primary}` : "none"};
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h3<{
  isCaseStudy?: string;
  link?: string;
  theme?: any;
}>`
  font-size: ${(props) => (props.isCaseStudy ? "1.125rem" : "1rem")};
  font-weight: ${(props) => (props.isCaseStudy ? "600" : "400")};
  color: ${(props) => props.theme.primary};
  margin: 0;

  &:hover {
    text-decoration: ${(props) => (props.link ? "underline" : "none")};
    cursor: ${(props) => props.link && "cell"};
  }
`;

export const DateText = styled.p`
  font-size: 0.875rem;
  color: ${(props: any) => props.theme.primary};
  opacity: 0.5;
  margin: 0;
  position: absolute;
  left: -10rem;
  width: 8rem;
  text-align: right;
  padding-right: 1rem;
`;

export const YearSeparator = styled.div`
  position: relative;
  margin: 3rem 0 2rem 0;
  padding-left: 1.5rem;
`;

export const Year = styled.h3`
  position: absolute;
  left: -10rem;
  top: -2.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props: any) => props.theme.primary};
  margin: 0;
`;

export const CaseStudyButton = styled.button`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  background-color: ${(props: any) =>
    props.theme.id === "light"
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(0, 0, 0, 0.3)"};
  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 3vh;
  padding: 0.1rem 0.5rem;

  &:hover {
    background: ${(props: any) => props.theme.highlight};
  }
`;
