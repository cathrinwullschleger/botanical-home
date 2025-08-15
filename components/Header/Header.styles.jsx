import styled from "styled-components";
import Link from "next/link";
export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  margin: 0;
  background-image: url("/header-bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 2rem 0;
  text-align: center;
  z-index: 1000;
`;
export const Title = styled.h1`
  font-family: var(--font-family-h);
  font-size: 2.5rem;
  margin: 0;
  color: var(--color-light-dark);
  margin-bottom: 1rem;
`;
export const Nav = styled.nav`
  padding-top: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
`;

export const Dot = styled.span`
  font-size: 0.5;
  color: var(--color-light-dark);
  display: none;
  @media (min-width: 900px) {
    display: inline;
  }
`;
export const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: var(--color-light-dark);
  font-family: var(--font-family-h);
  font-size: 1.3rem;
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: scaleX(${(props) => (props.$active ? 1 : 0)});
    transition: transform 0.2s ease;
    transform-origin: left;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
