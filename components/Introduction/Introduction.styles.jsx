import styled from "styled-components";
import Image from "next/image";

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0;
  margin-bottom: 2rem;
  padding: 0 20px;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: column;
    padding: 0 40px;
    gap: 3rem;
    margin: 20px auto 70px auto;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    padding: 0 60px;
    margin: 20px auto 70px auto;

    gap: 5.5rem;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const HighlightText = styled.span`
  color: var(--color-light-dark);
  font-family: var(--font-family-h);
  font-size: 1.4rem;
`;
export const Introtext = styled.p`
  font-family: var(--font-family-body);
  color: var(--color-light-dark);
  font-weight: 400;
  hyphens: auto;
  text-align: justify;
  flex: 1;
  line-height: 2.5;
`;
export const HighlightNumber = styled.span`
  color: var(--color-light-dark);
  font-family: var(--font-family-h);
  font-size: 2rem;
`;
export const IntroImage = styled(Image)`
  width: 100%;
  max-width: 200px;
  height: auto;

  @media (min-width: 900px) {
    max-width: 450px;
  }
`;
export const Counter = styled.p`
  font-family: var(--font-family-body);
  color: var(--color-light-dark);
  font-weight: 400;
  text-align: center;
`;
