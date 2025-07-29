import GlobalStyle, { mulish, italiana } from "../styles";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [likedPlants, setLikedPlants] = useLocalStorageState("likedPlants", {
    defaultValue: [],
  });

  function toggleLikedPlant(id) {
    setLikedPlants(
      (prev) =>
        prev.includes(id)
          ? prev.filter((plantId) => plantId !== id)
          : [...prev, id] // updating setLikedPlants (new Array without the id which was toogled)
    );
  }
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
            <Component
              {...pageProps}
              likedPlants={likedPlants}
              toggleLikedPlant={toggleLikedPlant}
            />
          </Layout>
        </div>
      </SWRConfig>
    </>
  );
}
