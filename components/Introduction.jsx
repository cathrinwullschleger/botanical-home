import styled from "styled-components";
import Image from "next/image";

const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5.5rem;

  padding: 0 50px;
  margin: 40px auto;
  max-width: 1200px;

  @media (min-width: 600px) {
    padding: 0 40px;
  }

  @media (min-width: 900px) {
    padding: 0 60px;
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
  text-align: center;
  flex: 1;
  line-height: 2.5;
`;

export default function Introduction() {
  return (
    <IntroWrapper>
      <Image
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
        it yourself and share your knowledge with others! You can also create
        your own plant collection and see which green beauties might still be
        missing from your home. Get inspired and turn your space into a
        botanical sanctuary!
      </Introtext>
    </IntroWrapper>
  );
}
