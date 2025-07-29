import styled from "styled-components";
import Link from "next/link";

export const BackLink = styled(Link)`
  color: var(--color-light-dark);
  font-family: var(--font-family-h);
  text-decoration: none;
  font-size: 1.7rem;
  position: fixed;

  left: 1.3rem;
  z-index: 1000;
`;
