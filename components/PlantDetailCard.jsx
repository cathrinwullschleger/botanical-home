import styled from "styled-components";
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import { StyledButton, ButtonWrapper } from "@/components/StyledButton.jsx";
import { StyledLink } from "./StyledLink";
import { StyledCard } from "./PlantCard";

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 1; /* quadratisches Verhältnis */
  margin: 0 auto 30px;
  position: relative;
  overflow: hidden;
`;

export const InlineWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;

  h4,
  p {
    margin: 0;
  }
`;
export default function PlantDetailCard({
  plant,
  isLiked,
  onToggle,
  id,
  showConfirm,
  setShowConfirm,
  onDelete,
}) {
  return (
    <StyledCard>
      <FavoriteButton isLiked={isLiked} onToggle={onToggle} />

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
      <ButtonWrapper>
        <StyledLink href={`/plants/${id}/edit`}>Edit this Plant</StyledLink>

        {!showConfirm && (
          <StyledButton onClick={() => setShowConfirm(true)} type="button">
            Remove this Plant
          </StyledButton>
        )}
      </ButtonWrapper>
      {showConfirm && (
        <div>
          <p>Do you really want to remove this plant?</p>
          <ButtonWrapper>
            <StyledButton onClick={onDelete} type="button">
              Yes, remove this Plant
            </StyledButton>
            <StyledButton onClick={() => setShowConfirm(false)} type="button">
              Cancel
            </StyledButton>
          </ButtonWrapper>
        </div>
      )}
    </StyledCard>
  );
}
