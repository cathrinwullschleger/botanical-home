import Form from "@/components/Form";
import { useRouter } from "next/router";
import { BackLink } from "@/components/BackLink";

export default function CreatePlant({ likedPlants, toggleLikedPlant }) {
  const router = useRouter();

  async function addPlant(plant) {
    try {
      const { addToFavorites, ...cleanData } = plant;
      console.log("addToFavorites in addPlant:", addToFavorites); // info of addToFavorites (but not add to the DB, just localstorage (togglelikedplant in_app)
      const res = await fetch("/api/plants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanData),
      });
      const newPlant = await res.json(); // newPlant to have id (created in api)

      if (addToFavorites) {
        toggleLikedPlant(newPlant._id); // if addToFavorite is true -> add Favorite(function in_app)
      }
      if (!res.ok) {
        throw new Error("Failed to add plant");
      }
      router.push("/");
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
