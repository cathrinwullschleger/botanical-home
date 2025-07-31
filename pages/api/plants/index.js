import dbConnect from "../../../db/connect";
import Plant from "@/db/models/Plant";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const plants = await Plant.find().sort({ createdAt: -1 });
    return response.status(200).json(plants);
  } else if (request.method === "POST") {
    const plantData = request.body;
    const newPlant = await Plant.create(plantData);
    return response.status(201).json(newPlant);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
