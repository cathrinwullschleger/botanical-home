import { useRouter } from "next/router";
import useSWR from "swr";
import { BackLink } from "@/components/BackLink";
import Form from "@/components/Form";

export default function EditPage() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: plant,
    error,
    isLoading,
  } = useSWR(id ? `/api/plants/${id}` : null);

  async function editPlant(plant) {
    try {
      const response = await fetch(`/api/plants/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      });
      if (!response.ok) {
        throw new Error("Failed to edit plant");
      }
      router.push("/");
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
      <Form onSubmit={editPlant} defaultData={plant} />
    </>
  );
}
