import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;

  aspect-ratio: ${({ aspectRatio }: { aspectRatio: string }) => {
    const width = aspectRatio.split(":")[0];
    const height = aspectRatio.split(":")[1];

    return `${width} / ${height}`;
  }};
`;
