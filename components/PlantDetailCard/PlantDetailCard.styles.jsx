import styled from "styled-components";

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
