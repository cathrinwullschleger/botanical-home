import { useRouter } from "next/router";
import styled from "styled-components";
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ["latin"], weight: ["400", "600"] });

const SubmitButton = styled.button`
  display: inline-block;
  justify-self: center;
  border: 1px solid black;
  background: transparent;
  padding: 0.5em 1em;
  font-size: 1rem;
  width: auto;
  cursor: pointer;
  font-weight: 400;
  transition: font-weight 0.2s ease;

  &:hover {
    background: #222222;
    color: white;
  }
`;

const FormWrapper = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 40px;
  background: #fff; // Farb Konzept eintrage
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 600px) {
    max-widht: 600px;
    padding: 20px;
  }

  @media (min-width: 900px) {
    max-width: 900px;
    padding: 24px;
  }
`;

const FormContainer = styled.form`
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
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.2s ease;

    /* &:focus {
      border-color: // Farb Konzept eintragen;
      outline: none;
    }
  */
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
  font-family: ${mulish.style.fontFamily};
  font-size: 1rem;
  color: black;

  &:invalid {
    color: gray;
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
      <FormContainer onSubmit={handleSubmit}>
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

        <SubmitButton type="submit">add Plant</SubmitButton>
      </FormContainer>
    </FormWrapper>
  );
}
