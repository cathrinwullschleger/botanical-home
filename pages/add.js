import Form from "@/components/Form";
import { useRouter } from "next/router";

import { BackLink } from "@/components/BackLink";

export default function CreatePlant() {
  const router = useRouter();

  async function addPlant(plant) {
    try {
      const res = await fetch("/api/plants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plant),
      });

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

      <Form onSubmit={addPlant} />
    </>
  );
}
