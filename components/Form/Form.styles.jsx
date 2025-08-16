import styled from "styled-components";

export const FormWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 0 16px;
  margin: 40px auto;
  border-radius: 0.12rem;
  background: var(--color-background-white);
  box-shadow: 0 3px 10px var(--color-shadow-black-rgba);

  @media (max-width: 599px) {
    max-width: calc(100% - 32px);
  }

  @media (min-width: 600px) {
    max-width: 600px;
    padding: 20px;
  }

  @media (min-width: 900px) {
    max-width: 900px;
    padding: 24px;
  }
`;

export const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
  padding: 1rem 0;
  font-family: var(--font-family-body);

  label {
    font-weight: 400;
    margin-bottom: 0.3rem;
    display: block;
  }

  input[type="text"],
  select,
  textarea {
    font-family: var(--font-family-body);
    width: 100%;
    padding: 0.6rem;
    border: 1px solid var(--color-shadow-black-rgba);
    border-radius: 4px;
    font-size: 1rem;
  }
  textarea {
    resize: vertical;
  }
`;

export const StyledCheckbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  label {
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

export const StyledSelect = styled.select`
  font-family: var(--font-family-body);
  font-size: 1rem;
  color: var(--color-light-black);

  &:invalid {
    color: var(--color-light-grey);
  }
`;
export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Uploadbutton = styled.label`
  border: 1px solid black;

  background: transparent;
  padding: 0.5em 1em;
  font-size: 1rem;
  border-radius: 0.12rem;
  display: inline-block;
  cursor: pointer;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;
export const UploadTitle = styled.p`
  font-family: var(--font-family-body);
`;

export const Notice = styled.p`
  font-family: var(--font-family-body);
  text-align: left;
`;
