import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-family-body);
  gap: 0.7rem;
  width: 100%;
  max-width: 1100px;

  @media (min-width: 600px) {
    align-items: flex-end;
  }
`;
