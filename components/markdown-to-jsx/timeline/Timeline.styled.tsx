import styled from "@emotion/styled";

export const TimelineContainer = styled.div`
  position: relative;
  padding-left: 10rem;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 8.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #000000;
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
`;

export const TimelineDot = styled.div<{ isCaseStudy?: string }>`
  position: absolute;
  left: ${(props) => (props.isCaseStudy ? "-1.95rem" : "-1.8rem")};
  top: 0.125rem;
  width: ${(props) => (props.isCaseStudy ? "1rem" : "0.75rem")};
  height: ${(props) => (props.isCaseStudy ? "1rem" : "0.75rem")};
  background-color: ${(props) => (props.isCaseStudy ? "#1f2937" : "#6b7280")};
  border-radius: 50%;
  border: 0.25rem solid #ffffff;
`;

export const EventContainer = styled.div<{ isCaseStudy?: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EventTitle = styled.h3<{ isCaseStudy?: string }>`
  font-size: ${(props) => (props.isCaseStudy ? "1.125rem" : "1rem")};
  font-weight: ${(props) => (props.isCaseStudy ? "600" : "400")};
  color: #000000;
  margin: 0;

  &:hover {
    text-decoration: underline;
    cursor: cell;
  }
`;

export const EventDate = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  position: absolute;
  left: -10rem;
  top: 0.125rem;
  width: 8rem;
  text-align: right;
  padding-right: 1rem;
`;

export const EventLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const YearSeparator = styled.div`
  position: relative;
  margin: 3rem 0 2rem 0;
  padding-left: 1.5rem;
`;

export const YearTitle = styled.h3`
  position: absolute;
  left: -10rem;
  top: -2.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
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
