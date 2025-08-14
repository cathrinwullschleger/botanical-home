import Form from "@/components/Form";
import { useRouter } from "next/router";
import slugify from "@/utils/slugify";
import { BackLink } from "@/components/BackLink";

export default function CreatePlant({ likedPlants, toggleLikedPlant }) {
  const router = useRouter();

  async function addPlant(plant, rawFormData) {
    let uploadedImageUrl = null;
    try {
      // 1. Upload Image (if there is one)
      if (rawFormData.get("imageFile")?.size > 0) {
        // is there data?

        // upload image
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: rawFormData, // formdata
        });

        if (!uploadRes.ok) {
          throw new Error("Image uploading failed");
        }
        const uploadResult = await uploadRes.json();
        uploadedImageUrl = uploadResult.secure_url;
      }
      // create plant as json
      const { addToFavorites, imageFile, ...cleanData } = plant; // info of addToFavorites (but not add to the DB, just localstorage (togglelikedplant in_app)
      // Debug: Schauen was wir senden

      cleanData.slug = slugify(cleanData.name);

      // add image if there
      if (uploadedImageUrl) {
        cleanData.imageUrl = uploadedImageUrl;
        cleanData.imageUrl = uploadedImageUrl; // add prio
      }

      const res = await fetch("/api/plants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanData),
      });

      const newPlant = await res.json(); // newPlant to have id (created in api)

      if (!res.ok) {
        throw new Error("Failed to add plant");
      }
      if (addToFavorites) {
        toggleLikedPlant(newPlant._id);
        router.push("/my-plants");
      } else {
        router.push("/plants");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding plant");
    }
  }

  return (
    <>
      <BackLink href="/">←</BackLink>
      <h1>Add a new Plant to the Collection</h1>

      <Form onSubmit={addPlant} likedPlants={likedPlants} />
    </>
  );
}
