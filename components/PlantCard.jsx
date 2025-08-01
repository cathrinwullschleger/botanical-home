import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  padding: 0 16px;
  margin: 40px auto;
  width: 100%;
  max-width: 1200px;
  list-style: none;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
    padding: 0 40px;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 60px;
  }
`;

export const StyledCard = styled.li`
  position: relative;
  background: var(--color-background-white);
  color: var(--color-light-dark);
  font-family: var(--font-family-body);
  padding: 16px;
  box-shadow: 0 3px 10px var(--color-shadow-black-rgba);
  border-radius: 0.12rem;
  text-align: center;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    padding: 20px;
  }

  @media (min-width: 900px) {
    padding: 24px;
  }
`;

export const PlantImage = styled(Image)`
  width: 100%;
  height: auto;
  margin-bottom: 12px;

  @media (min-width: 900px) {
    width: 100%;
  }
`;

export default function PlantCard({ plant, isLiked, onToggle }) {
  return (
    <StyledCard>
      <Link href={`/plants/${plant._id}`}>
        <PlantImage
          src={plant.imageUrl}
          alt={plant.name || "Plant Image"}
          width={200}
          height={200}
          style={{ objectFit: "cover" }}
          priority
        />
      </Link>
      <FavoriteButton isLiked={isLiked} onToggle={onToggle} />
      <h2>{plant.name}</h2>
      <h3>{plant.botanicalName}</h3>
    </StyledCard>
  );
}
