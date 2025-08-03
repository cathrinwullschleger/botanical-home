import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BackLink } from "@/components/BackLink";
import { useState } from "react";
import PlantDetailCard from "@/components/PlantDetailCard";

const DetailPageWrapper = styled.div`
  max-width: 700px; /* max Breite für Detailseite */
  margin: 40px auto; /* zentriert und oben Abstand */
  padding: 0 16px; /* horizontaler Abstand mobil */
`;

export default function DetailsPage({ likedPlants, toggleLikedPlant }) {
  const router = useRouter();
  const { id } = router.query;
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    data: plant,
    error,
    isLoading,
  } = useSWR(id ? `/api/plants/${id}` : null);

  if (!id) return <h2>Please select a Plant.</h2>;
  if (isLoading) return <h2>Loading ..</h2>;
  if (error) return <h2> Error loading Plant.</h2>;
  if (!plant && !isLoading && !error)
    return <h2>Unfortunately no Plant found. </h2>;

  async function handleDelete() {
    const response = await fetch(`/api/plants/${id}`, { method: "DELETE" }); //delete request
    if (!response.ok) {
      console.error(response.status);
      return;
    }

    router.push("/plants");
  }

  return (
    <>
      <BackLink href="/plants">← </BackLink>

      <DetailPageWrapper>
        <PlantDetailCard
          id={id}
          plant={plant}
          onDelete={handleDelete}
          showConfirm={showConfirm}
          setShowConfirm={setShowConfirm}
          isLiked={likedPlants.includes(plant._id)}
          onToggle={() => toggleLikedPlant(plant._id)}
        />
      </DetailPageWrapper>
    </>
  );
}
