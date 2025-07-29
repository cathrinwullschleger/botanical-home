import Head from "next/head";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  padding-top: 10rem; /* Höhe Header */
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
