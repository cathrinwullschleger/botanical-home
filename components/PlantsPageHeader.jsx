import styled from "styled-components";
import { SearchWrapper } from "./SearchWrapper";

export const PlantPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${SearchWrapper} {
    order: 1;
  }

  h1 {
    order: 2;
  }

  @media (min-width: 900px) {
    ${SearchWrapper} {
      order: 1;
    }
    h1 {
      order: 2;
    }
  }
`;
