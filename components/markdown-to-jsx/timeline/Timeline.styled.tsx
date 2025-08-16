import styled from "@emotion/styled";

export const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 0.5rem;
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

export const TimelineDot = styled.div<{ isMajor?: boolean }>`
  position: absolute;
  left: ${(props) => (props.isMajor ? "-1.95rem" : "-1.8rem")};
  top: 0.125rem;
  width: ${(props) => (props.isMajor ? "1rem" : "0.75rem")};
  height: ${(props) => (props.isMajor ? "1rem" : "0.75rem")};
  background-color: ${(props) => (props.isMajor ? "#1f2937" : "#6b7280")};
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 0 0 3px #e5e7eb;
`;

export const EventTitle = styled.h3<{ isMajor?: boolean }>`
  font-size: ${(props) => (props.isMajor ? "1.125rem" : "1rem")};
  font-weight: ${(props) => (props.isMajor ? "600" : "500")};
  color: #1f2937;
  margin: 0 0 0.25rem 0;
  line-height: 1.4;
`;

export const EventDate = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

export const EventLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
