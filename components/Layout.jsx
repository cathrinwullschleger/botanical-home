import Head from "next/head";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  padding: 11rem 0 2rem; /* Oben, Seiten, Unten */
  margin: 0 auto; /* zentriert auf großen Bildschirmen */
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Botanical Home</title>
      </Head>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
