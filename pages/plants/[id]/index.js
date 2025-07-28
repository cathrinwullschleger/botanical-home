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
const ImageWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1; /* quadratisches Verhältnis */
  margin: 0 auto 30px;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    max-width: 100%; /* mobil volle Breite nutzen */
  }
`;
const InlineWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;

  h4,
  p {
    margin: 0;
  }
`;

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [showConfirm, setShowConfirm] = useState(false);

  function handleEdit() {
    router.push(`/plants/${id}/edit`);
  }

  function handleDelete() {
    router.push(`/`);
  }
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

  async function deletePlant() {
    const response = await fetch(`/api/plants/${id}`, { method: "DELETE" }); //delete request
    if (!response.ok) {
      console.error(response.status);
      return;
    }

    router.push("/");
  }

  return (
    <>
      <BackLink href="/">← </BackLink>

      <DetailPageWrapper>
        <PlantDetailCard
          plant={plant}
          onEdit={handleEdit}
          onDelete={deletePlant}
          showConfirm={showConfirm}
          setShowConfirm={setShowConfirm}
        />
      </DetailPageWrapper>
    </>
  );
}
