import Form from "@/components/Form";
import { useRouter } from "next/router";
import slugify from "@/utils/slugify";
import { BackLink } from "@/components/BackLink";

export default function CreatePlant({ likedPlants, toggleLikedPlant }) {
  const router = useRouter();

  async function addPlant(plant, rawFormData) {
    let uploadedImageUrl = null;
    try {
      // 1. Upload Image
      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: rawFormData,
      });

      if (!uploadRes.ok) {
        throw new Error("Image upload failed");
      }

      const { secure_url: imageUrl } = await uploadRes.json();

      // 2. Create plant data
      const { addToFavorites, imageFile, ...cleanData } = plant;
      cleanData.slug = slugify(cleanData.name);
      cleanData.imageUrl = imageUrl;
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
      <BackLink href="/">
        <span aria-hidden="true">←</span>
      </BackLink>
      <h1>Add a new Plant to the Collection</h1>

      <Form onSubmit={addPlant} likedPlants={likedPlants} />
    </>
  );
}
