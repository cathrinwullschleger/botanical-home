import { useRouter } from "next/router";
import { useState } from "react";
import { StyledButton, ButtonWrapper } from "@/components/StyledButton.jsx";

import { StyledLink } from "../StyledLink";
import {
  UploadTitle,
  Uploadbutton,
  FormWrapper,
  UploadContainer,
  HiddenInput,
  Notice,
  StyledCheckbox,
  StyledSelect,
  StyledForm,
} from "./Form.styles";

import Image from "next/image";

const fertiliserSeasons = ["Spring", "Summer", "Autumn", "Winter"];

export default function Form({ onSubmit, defaultData, likedPlants }) {
  const [imageFile, setImageFile] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  const [preview, setPreview] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [showUploadNotice, setShowUploadNotice] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // text data to object
    const data = Object.fromEntries(formData);
    data.fertiliserSeason = formData.getAll("fertiliserSeason");
    data.addToFavorites = formData.get("addToFavorites") === "on"; // add favorite
    // handlich required fields
    const errors = {};

    if (!data.name) errors.name = "* Please enter a Name";
    if (!data.botanicalName)
      errors.botanicalName = "* Please enter a Botanical Name";
    if (!imageFile) errors.imageFile = "* Please upload an Image";
    if (!data.waterNeed) errors.waterNeed = "* Please select a Water Need";
    if (!data.lightNeed) errors.lightNeed = "* Please select a Light Need";
    if (data.fertiliserSeason.length === 0)
      errors.fertiliserSeason =
        "* Please select at least one Fertiliser Season";
    if (!data.description) errors.description = "* Please enter a Description";

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      // just required message not a backend error
      setFormErrors(errors);
      return;
    }

    delete data.imageFile;
    onSubmit(data, formData);
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
        />
        {formErrors.name && <p>{formErrors.name}</p>}
        <label htmlFor="botanicalName">Botanical Name</label>
        <input
          id="botanicalName"
          name="botanicalName"
          type="text"
          defaultValue={defaultData?.botanicalName}
        />
        {formErrors.name && <p>{formErrors.botanicalName}</p>}

        <UploadContainer>
          <UploadTitle>Image Upload</UploadTitle>
          <Uploadbutton
            htmlFor="imageFile"
            onClick={() => setShowUploadNotice(true)} // showUploadNotive
          >
            Choose file
          </Uploadbutton>
          <HiddenInput
            id="imageFile"
            name="imageFile"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setImageFile(file);
              setPreview(file ? URL.createObjectURL(file) : null); // set preview
            }}
          />
          {showUploadNotice && (
            <Notice>
              By uploading images, you consent to their storage and display on
              our platform.
              <br />
              Please ensure you have the rights to share them.
            </Notice>
          )}
          {preview && (
            <div>
              <p>Selected file: {imageFile.name}</p>
              <Image
                src={preview}
                alt="Preview"
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </UploadContainer>
        {formErrors.imageFile && <p>{formErrors.imageFile}</p>}
        <label htmlFor="waterNeed">Water Need</label>
        <StyledSelect
          id="waterNeed"
          name="waterNeed"
          defaultValue={defaultData?.waterNeed}
        >
          <option value="">Select water need</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </StyledSelect>
        {formErrors.waterNeed && <p>{formErrors.waterNeed}</p>}
        <label htmlFor="lightNeed">Light Need</label>
        <StyledSelect
          id="lightNeed"
          name="lightNeed"
          defaultValue={defaultData?.lightNeed}
        >
          <option value="">Select light need</option>
          <option value="Full Sun">Full Sun</option>
          <option value="Partial Shade">Partial Shade</option>
          <option value="Shade">Shade</option>
        </StyledSelect>
        {formErrors.waterNeed && <p>{formErrors.lightNeed}</p>}
        <label>Fertiliser Season</label>
        <StyledCheckbox>
          {fertiliserSeasons.map((season) => (
            <label key={season}>
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
        {formErrors.fertiliserSeason && <p>{formErrors.fertiliserSeason}</p>}
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          defaultValue={defaultData?.description}
        ></textarea>
        {formErrors.description && <p>{formErrors.description}</p>}
        <StyledCheckbox>
          <label htmlFor="addToFavorites">
            Add this Plant to my Collection
          </label>
          <input
            id="addToFavorites"
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
          <StyledLink href={defaultData ? `/plants/${slug}` : `/plants`}>
            Cancel
          </StyledLink>
        </ButtonWrapper>
      </StyledForm>
    </FormWrapper>
  );
}
