import styled from "styled-components";
import Link from "next/link";

export const StyledAnchor = styled.a`
  font-family: var(--font-family-body);
  display: flex;
  justify-content: center;
  border: 1px solid black;
  background: transparent;
  padding: 0.5em 1rem;
  font-size: 1rem;
  border-radius: 0.12rem;
  width: fit-content;
  cursor: pointer;
  font-weight: 400;
  color: var(--color-light-dark);
  text-decoration: none;
  text-align: center;

  &:hover {
    background: var(--color-light-dark);
    color: var(--color-natural-white);
  }
`;
export function StyledLink({ href, children }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledAnchor>{children}</StyledAnchor>
    </Link>
  );
}
