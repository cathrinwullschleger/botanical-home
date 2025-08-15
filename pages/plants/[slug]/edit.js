import { useRouter } from "next/router";
import useSWR from "swr";
import { BackLink } from "@/components/BackLink";
import Form from "@/components/Form/Form";

export default function EditPage({ likedPlants, toggleLikedPlant }) {
  const router = useRouter();
  const { slug } = router.query;
  const {
    data: plant,
    error,
    isLoading,
  } = useSWR(slug ? `/api/plants/${slug}` : null);

  async function editPlant(plantData, rawFormData) {
    try {
      // 1. Handle image upload
      const uploadRes = await fetch("/api/upload", {
        method: "PUT",
        body: rawFormData,
      });

      if (!uploadRes.ok) {
        throw new Error("Image upload failed");
      }

      const { secure_url: imageUrl } = await uploadRes.json();

      // 2. Prepare plant data
      const { imageFile, ...plant } = plantData;
      plant.imageUrl = imageUrl;
      const response = await fetch(`/api/plants/${slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      });
      if (!response.ok) {
        throw new Error("Failed to edit plant");
      }

      if (plant.addToFavorites) {
        if (!likedPlants.includes(plant._id)) {
          toggleLikedPlant(plant._id); // add to likedPlants
        }
        router.push("/my-plants");
      } else {
        if (likedPlants.includes(plant._id)) {
          toggleLikedPlant(plant._id); // remove from likedPlant
        }
        router.push("/plants");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating plant");
    }
  }
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading plant</p>;
  if (!plant) return <p>No plant data found</p>;
  return (
    <>
      <BackLink href="/">←</BackLink>
      <h1>Edit Plant</h1>
      <Form
        onSubmit={editPlant}
        defaultData={plant}
        likedPlants={likedPlants}
        slug={plant.slug}
      />
    </>
  );
}
