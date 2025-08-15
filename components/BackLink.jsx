import styled from "styled-components";
import Link from "next/link";

export const BackLink = styled(Link).attrs({
  "aria-label": "Back to Plant Collection",
})`
  color: var(--color-light-dark);
  font-family: var(--font-family-h);
  text-decoration: none;
  font-size: 1.7rem;
  position: fixed;
  top: 10rem;
  left: 1.3rem;
  z-index: 1000;
`;
