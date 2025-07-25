import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import { PlantCard } from "@/components/PlantCard";
import { BackLink } from "@/components/BackLink";
import { StyledButton } from "@/components/StyledButton.js";
import { useState } from "react";

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

  const {
    data: plant,
    error,
    isLoading,
  } = useSWR(id ? `/api/plants/${id}` : null);

  if (!id) return <h2>Please select a plant.</h2>;
  if (isLoading) return <h2>Loading ..</h2>;
  if (error) return <h2> Error loading plant.</h2>;
  if (!plant && !isLoading && !error)
    return <h2>Unfortunately no Plant found. </h2>;

  async function deletePlant() {
    const response = await fetch(`/api/plants/${id}`, { method: "DELETE" }); //delete request
    if (response.ok) {
      router.push("/");
    } //else?
  }
  return (
    <>
      <BackLink href="/">← </BackLink>

      <DetailPageWrapper>
        <PlantCard>
          <ImageWrapper>
            <Image
              src={plant.imageUrl}
              alt={plant.name || "Plant Image"}
              layout="fill"
              objectFit="cover"
              priority
            />
          </ImageWrapper>

          <h2>{plant.name}</h2>
          <h3>{plant.botanicalName}</h3>
          <p>{plant.description}</p>
          <InlineWrapper>
            <h4>Fertiliser Season: </h4>
            <p>{plant.fertiliserSeason.join(", ")}</p>
          </InlineWrapper>
          <InlineWrapper>
            <h4>Water Needs: </h4>
            <p>{plant.waterNeed}</p>
          </InlineWrapper>
          <InlineWrapper>
            <h4>Light Needs: </h4>
            <p>{plant.lightNeed}</p>
          </InlineWrapper>
          {!showConfirm && (
            <StyledButton onClick={() => setShowConfirm(true)} type="button">
              Remove this Plant
            </StyledButton>
          )}
          {showConfirm && (
            <div>
              <p>Do you really want to remove this plant?</p>
              <StyledButton onClick={deletePlant} type="button">
                Yes, remove this Plant
              </StyledButton>
              <StyledButton onClick={() => setShowConfirm(false)} type="button">
                Cancel
              </StyledButton>
            </div>
          )}
        </PlantCard>
      </DetailPageWrapper>
    </>
  );
}
