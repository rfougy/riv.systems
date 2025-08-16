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

export const EventTitle = styled.h3<{ isCaseStudy?: string }>`
  display: inline-block;
  font-size: ${(props) => (props.isCaseStudy ? "1.125rem" : "1rem")};
  font-weight: ${(props) => (props.isCaseStudy ? "600" : "400")};
  color: #000000;
  margin: 0;
  width: fit-content;

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
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
  position: absolute;
  left: -10rem;
  top: -2.5rem;
`;

export const EventDetails = styled.div`
  display: flex;
  gap: 0 0.5rem;
  height: 100%;
  align-items: center;

  img {
    filter: invert(0.5);
    -webkit-filter: invert(0.5);
  }

  &:hover {
    text-decoration: underline;
    cursor: cell;
    img {
      filter: invert(0);
      -webkit-filter: invert(0);
    }
  }
`;
