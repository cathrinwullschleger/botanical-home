import {
  IntroWrapper,
  IntroImage,
  TextWrapper,
  Introtext,
  HighlightText,
  Counter,
  HighlightNumber,
} from "./Introduction.styles";
import useSWR from "swr";

import { ButtonWrapper } from "../StyledButton";
import { StyledLink } from "../StyledLink";

export default function Introduction() {
  const { data: plants } = useSWR("/api/plants");
  return (
    <IntroWrapper>
      <IntroImage
        src="/intro.jpeg"
        alt="Intro Picture: Detail Picture of a leaf"
        width={450}
        height={550}
        objectFit="cover"
      />
      <TextWrapper>
        <Introtext>
          Welcome to <HighlightText>Botanical Home</HighlightText> – your green
          community for plant lovers! Here you’ll discover all kinds of
          houseplants, learn what kind of light and water they need, and find
          out the best times to fertilize them. Got a plant that’s not listed
          yet? Add it yourself and share your knowledge with others! You can
          also add Plants to your own plant collection and see which green
          beauties might still be missing from your home. Get inspired and turn
          your space into a botanical sanctuary!{" "}
        </Introtext>
        <br />
        <br />
        <Counter>
          Currently, we have{" "}
          <HighlightNumber> {plants ? plants.length : 0}</HighlightNumber>{" "}
          Plants listed.{" "}
        </Counter>
        <ButtonWrapper>
          <StyledLink href="/plants">Dive into the Plant Collection</StyledLink>
        </ButtonWrapper>
      </TextWrapper>
    </IntroWrapper>
  );
}
