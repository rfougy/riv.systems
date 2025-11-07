import styled from "@emotion/styled";

/**
 * @description styled components are used for: Home Page, 404 Page, and 500 Page.
 */

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  text-align: center;
  ${({ isIntroText }: { isIntroText?: boolean }) =>
    isIntroText &&
    `
    margin-top: 0;
    `}
`;

export const Margin = styled.div`
  margin: 2rem 0;
`;

export const Button = styled.button<{$isOpen?: boolean}>`
  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 1rem;
  width: 10rem;

  padding: 0.5rem 1rem;
  margin-top: 1rem;
  color: ${(props: any & {$isOpen?: boolean}) =>
    props.$isOpen ? "#ffffff" : props.theme.primary};
  background-color: ${(props: any & {$isOpen?: boolean}) =>
    props.$isOpen
      ? "#000000"
      : props.theme.id === "light"
      ? props.theme.secondary
      : "none"};

  border-bottom-left-radius: ${({ $isOpen }) => ($isOpen ? "0" : "1rem")};
  border-bottom-right-radius: ${({ $isOpen }) => ($isOpen ? "0" : "1rem")};
  border-bottom-width: ${({ $isOpen }) => ($isOpen ? "0" : "0.1rem")};

  &:hover {
    color: ${(props: any & {$isOpen?: boolean}) =>
      props.$isOpen
        ? "#ffffff"
        : props.theme.id === "light"
        ? props.theme.secondary
        : "none"};
    background-color: ${(props: any & {$isOpen?: boolean}) =>
      props.$isOpen
        ? "#000000"
        : props.theme.id === "light"
        ? props.theme.primary
        : "#2D2D2D"};
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${(props: any) =>
    props.theme.id === "light" ? props.theme.secondary : "#1C1C1C"};
  z-index: 10;
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export const DropdownItem = styled.a`
  display: block;
  padding: 0.75rem 1rem;
  color: ${(props: any) => props.theme.primary};
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  transition: none;

  &:hover {
    background-color: ${(props: any) => props.theme.highlight};
    color: inherit;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(props: any) => props.theme.primary};
  opacity: 0.4;
`;
