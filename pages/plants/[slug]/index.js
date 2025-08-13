import useSWR from "swr";
import { useRouter } from "next/router";
import styled from "styled-components";
import { BackLink } from "@/components/BackLink";
import { useState } from "react";
import PlantDetailCard from "@/components/PlantDetailCard";

const DetailPageWrapper = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 0 16px;
`;

export default function DetailsPage({ likedPlants, toggleLikedPlant }) {
  const router = useRouter();
  const { slug } = router.query;
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    data: plant,
    error,
    isLoading,
  } = useSWR(slug ? `/api/plants/${slug}` : null);

  if (!slug) return <h2>Please select a Plant.</h2>;
  if (isLoading) return <h2>Loading ..</h2>;
  if (error) return <h2> Error loading Plant.</h2>;
  if (!plant && !isLoading && !error)
    return <h2>Unfortunately no Plant found. </h2>;

  async function handleDelete() {
    const response = await fetch(`/api/plants/${slug}`, { method: "DELETE" }); //delete request
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
          id={plant._id}
          plant={plant}
          onDelete={handleDelete}
          showConfirm={showConfirm}
          setShowConfirm={setShowConfirm}
          isLiked={likedPlants.includes(plant._id)}
          onToggle={() => toggleLikedPlant(plant._id)}
          slug={plant.slug}
        />
      </DetailPageWrapper>
    </>
  );
}
