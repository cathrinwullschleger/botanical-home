import Form from "@/components/Form";
import { useRouter } from "next/router";
import Link from "next/link";

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

      // Optionally redirect or show success message
      router.push("/");
    } catch (error) {
      console.error(error);
      alert("Error adding plant");
    }
  }

  return (
    <>
      <Link href="/">← </Link>
      <h1>Add a plant to the Collection</h1>

      <Form onSubmit={addPlant} />
    </>
  );
}
