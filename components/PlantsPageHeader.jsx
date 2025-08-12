import styled from "styled-components";
import { SearchWrapper } from "./SearchWrapper";

export const PlantPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
  position: relative;

  ${SearchWrapper} {
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  h1 {
    order: 1;
  }

  @media (min-width: 900px) {
    padding-bottom: 0.5rem;
    margin-top: 1rem;
    ${SearchWrapper} {
      order: 1;
      top: 15px;
    }
    h1 {
      order: 2;
    }
  }
`;
