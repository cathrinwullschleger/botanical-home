import styled from "styled-components";
import Image from "next/image";

const HoverTextWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;
const HoverText = styled.span`
  visibility: hidden;
  width: max-content;
  background-color: var(--color-background-white);
  font-size: 1rem;
  color: var(--color-light-dark);
  font-family: var(--font-family-body);
  text-align: center;
  border-radius: 0.12rem;

  padding: 6px 8px;
  position: absolute;
  z-index: 1;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
`;
const OwnedButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-bottom: 0;
`;

export default function FavoriteButton({ isLiked, onToggle }) {
  return (
    <HoverTextWrapper>
      <HoverText>
        {isLiked ? "Already in Your Collection" : "Safe to Your Collection"}
      </HoverText>
      <OwnedButton onClick={onToggle} aria-label="Toggle owned">
        <Image
          src={isLiked ? "/owned-icon.png" : "/not-owned-icon.png"}
          alt={isLiked ? "Owned" : "Not Owned"}
          width={55}
          height={55}
        ></Image>
      </OwnedButton>
    </HoverTextWrapper>
  );
}
