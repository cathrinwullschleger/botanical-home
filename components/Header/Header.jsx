import { HeaderWrapper, Title, Nav, NavLink, Dot } from "./Header.styles";
import { useRouter } from "next/router";

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
        <NavLink href="/plants" $active={pathname === "/plants"}>
          Plants{" "}
        </NavLink>
        <Dot>•</Dot>
        <NavLink href="/add" $active={pathname === "/add"}>
          Add Plant
        </NavLink>
        <Dot>•</Dot>
        <NavLink href="/my-plants" $active={pathname === "/my-plants"}>
          My Plants
        </NavLink>
      </Nav>
    </HeaderWrapper>
  );
}
