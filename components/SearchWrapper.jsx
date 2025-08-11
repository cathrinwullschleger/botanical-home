import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-family-body);
  gap: 0.7rem;
  padding: 16px;
  margin: 40px auto;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 600px) {
    align-items: flex-end;
  }

  @media (min-width: 900px) {
    align-items: flex-end;
  }
`;
