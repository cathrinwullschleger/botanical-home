import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledButton, ButtonWrapper } from "@/components/StyledButton.jsx";
import { useState } from "react";
import { StyledLink } from "./StyledLink";

const FormWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 0 16px;
  margin: 40px auto;
  border-radius: 0.12rem;
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
    border: 1px solid var(--color-shadow-black);
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
  }
  textarea {
    resize: vertical;
  }
`;

const StyledCheckbox = styled.div`
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

export default function Form({ onSubmit, defaultData, likedPlants }) {
  const router = useRouter();
  const { id } = router.query;
  const [showHint, setShowHint] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.fertiliserSeason = formData.getAll("fertiliserSeason");
    data.addToFavorites = formData.get("addToFavorites") === "on"; // als Favorite hinzufügen

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
        <input
          id="name"
          name="name"
          type="text"
          defaultValue={defaultData?.name}
          required
        />

        <label htmlFor="botanicalName">Botanical Name</label>
        <input
          id="botanicalName"
          name="botanicalName"
          type="text"
          defaultValue={defaultData?.botanicalName}
          required
        />

        <label htmlFor="imageUrl">Image Url</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          onFocus={() => setShowHint(true)}
          defaultValue={defaultData?.imageUrl}
          required
        />
        {showHint && (
          <p>
            Please enter a valid image URL starting with <code>http://</code> or{" "}
            <code>https://</code>. Check out{" "}
            <a href="https://unsplash.com/@feeypflanzen" target="_blank">
              feeypflanzen
            </a>{" "}
            - she shares beautiful plant photos and has a huge variety of
            plants.
          </p>
        )}

        <label htmlFor="waterNeed">Water Need</label>
        <StyledSelect
          id="waterNeed"
          name="waterNeed"
          defaultValue={defaultData?.waterNeed}
          required
        >
          <option value="">Select water need</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </StyledSelect>

        <label htmlFor="lightNeed">Light Need</label>
        <StyledSelect
          id="lightNeed"
          name="lightNeed"
          defaultValue={defaultData?.lightNeed}
          required
        >
          <option value="">Select light need</option>
          <option value="Full Sun">Full Sun</option>
          <option value="Partial Shade">Partial Shade</option>
          <option value="Shade">Shade</option>
        </StyledSelect>

        <label>Fertiliser Season</label>
        <StyledCheckbox>
          {fertiliserSeasons.map((season) => (
            <label key={season} style={{ marginRight: "1rem" }}>
              <input
                type="checkbox"
                name="fertiliserSeason"
                value={season}
                defaultChecked={defaultData?.fertiliserSeason?.includes(season)}
              />
              {season}
            </label>
          ))}
        </StyledCheckbox>

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          defaultValue={defaultData?.description}
          required
        ></textarea>
        <StyledCheckbox>
          <label htmlFor="addToFavorites">
            Do you like to add this Plant to your Collection?
          </label>
          <input
            type="checkbox"
            name="addToFavorites"
            defaultChecked={likedPlants.includes(defaultData?._id)}
          />
        </StyledCheckbox>
        <ButtonWrapper>
          <StyledButton type="submit">
            {" "}
            {defaultData ? "Safe changes" : "Add Plant"}
          </StyledButton>
          <StyledLink href={defaultData ? `/plants/${id}` : `/`}>
            Cancel
          </StyledLink>
        </ButtonWrapper>
      </StyledForm>
    </FormWrapper>
  );
}
