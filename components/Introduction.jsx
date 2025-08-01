import styled from "styled-components";
import Image from "next/image";

const IntroWrapper = styled.div`
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

const HighlightText = styled.span`
  color: var(--color-light-dark);
  font-family: var(--font-family-h);
  font-size: 1.2rem;
`;
const Introtext = styled.p`
  font-family: var(--font-family-body);
  color: var(--color-light-dark);
  font-weight: 400;
  hyphens: auto;
  text-align: justify;
  flex: 1;
  line-height: 2.5;
`;

const IntroImage = styled(Image)`
  width: 100%; /* Bild füllt Kartenbreite */
  max-width: 300px;
  height: auto;
  margin-bottom: 12px;

  @media (min-width: 900px) {
    max-width: 450px; /* größere Bilder auf Desktop */
  }
`;

export default function Introduction() {
  return (
    <IntroWrapper>
      <IntroImage
        src="/intro.jpeg"
        alt="Intro Picture"
        width={450}
        height={550}
        objectFit="cover"
      />
      <Introtext>
        Welcome to <HighlightText>Botanical Home</HighlightText> – your green
        community for plant lovers! Here you’ll discover all kinds of
        houseplants, learn what kind of light and water they need, and find out
        the best times to fertilize them. Got a plant that’s not listed yet? Add
        it yourself and share your knowledge with others! You can also add
        Plants to your own plant collection and see which green beauties might
        still be missing from your home. Get inspired and turn your space into a
        botanical sanctuary!
      </Introtext>
    </IntroWrapper>
  );
}
