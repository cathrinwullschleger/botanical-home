import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { PlantCard } from "../../../components/PlantCard";

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

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

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

  return (
    <>
      <Link href="/">← </Link>

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
          <p>Fertiliser Season: {plant.fertiliserSeason}</p>
          <p>Water Needs: {plant.waterNeed}</p>
          <p>Light Needs: {plant.lightNeed}</p>
        </PlantCard>
      </DetailPageWrapper>
    </>
  );
}
