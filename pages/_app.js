import GlobalStyle, { mulish, italiana } from "../styles";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [likedPlants, setLikedPlants] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("likedPlants");
    if (stored) {
      setLikedPlants(JSON.parse(stored));
    }
  }, []); // first time rendering, checking are there stored Plants in localstorage? parse to likedPlants state

  useEffect(() => {
    localStorage.setItem("likedPlants", JSON.stringify(likedPlants));
  }, [likedPlants]); // by changing safe via json string in localstorage

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
