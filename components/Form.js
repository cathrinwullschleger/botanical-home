import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledButton } from "@/components/StyledButton.js";

const FormWrapper = styled.div`
  max-width: 500px;
  margin: 40px auto;
  border-radius: 0.12rem;
  padding: 40px;
  background: var(--color-background-white);
  box-shadow: 0 3px 10px var(--color-shadow-black-rgba);

  @media (min-width: 600px) {
    max-width: 600px;
    padding: 20px;
  }

  @media (min-width: 900px) {
    max-width: 900px;
    padding: 24px;
  }
`;

const StyledForm = styled.form`
  display: grid;
  gap: 1rem;
  padding: 1rem;

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
    border: 1px solid var(--color-shadow-black);
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
  }
  textarea {
    resize: vertical;
  }
`;

const CheckboxGroup = styled.div`
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

const StyledSelect = styled.select`
  font-family: var(--font-family-body);
  font-size: 1rem;
  color: var(--color-light-black);

  &:invalid {
    color: var(--color-light-grey);
  }
`;
const fertiliserSeasons = ["Spring", "Summer", "Autumn", "Winter"];

export default function Form({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.fertiliserSeason = formData.getAll("fertiliserSeason");

    // Custom validation: at least one fertiliserSeason checkbox checked
    if (data.fertiliserSeason.length === 0) {
      alert("Please select at least one fertiliser season.");
      return;
    }

    onSubmit(data);
  }

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="botanicalName">Botanical Name</label>
        <input id="botanicalName" name="botanicalName" type="text" required />

        <label htmlFor="imageUrl">Image Url</label>
        <input id="imageUrl" name="imageUrl" type="text" required />

        <label htmlFor="waterNeed">Water Need</label>
        <StyledSelect id="waterNeed" name="waterNeed" required>
          <option value="">Select water need</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </StyledSelect>

        <label htmlFor="lightNeed">Light Need</label>
        <StyledSelect id="lightNeed" name="lightNeed" required>
          <option value="">Select light need</option>
          <option value="Full Sun">Full Sun</option>
          <option value="Partial Shade">Partial Shade</option>
          <option value="Shade">Shade</option>
        </StyledSelect>

        <label>Fertiliser Season</label>
        <CheckboxGroup>
          {fertiliserSeasons.map((season) => (
            <label key={season} style={{ marginRight: "1rem" }}>
              <input type="checkbox" name="fertiliserSeason" value={season} />
              {season}
            </label>
          ))}
        </CheckboxGroup>

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          required
        ></textarea>

        <StyledButton type="submit">add Plant</StyledButton>
      </StyledForm>
    </FormWrapper>
  );
}
