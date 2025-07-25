import GlobalStyle, { mulish, italiana } from "../styles";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <div className={`${mulish.variable} ${italiana.variable}`}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </SWRConfig>
    </>
  );
}
