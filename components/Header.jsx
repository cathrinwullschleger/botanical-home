import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderWrapper = styled.header`
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
const Title = styled.h1`
  font-family: var(--font-family-h);
  font-size: 2.2rem;
  margin: 0;
  color: var(--color-light-dark);
  margin-bottom: 1rem;
`;
const Nav = styled.nav`
  padding-top: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
`;

const Dot = styled.span`
  font-size: 1.25rem;
  color: var(--color-light-dark);
`;
const NavLink = styled(Link)`
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

export default function Header() {
  const { pathname } = useRouter();

  return (
    <HeaderWrapper>
      <Title>Botanical Home</Title>
      <Nav>
        <NavLink href="/" $active={pathname === "/"}>
          Home
        </NavLink>
        <Dot>•</Dot>
        <NavLink href="/add" $active={pathname === "/add"}>
          Add Plant
        </NavLink>
        <Dot>•</Dot>
        <NavLink href="/my-collection" $active={pathname === "/my-collection"}>
          My Collection
        </NavLink>
      </Nav>
    </HeaderWrapper>
  );
}
