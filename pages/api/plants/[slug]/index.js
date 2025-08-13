import dbConnect from "@/db/connect";
import Plant from "@/db/models/Plant.js";
import slugify from "@/utils/slugify";

export default async function handler(request, response) {
  try {
    await dbConnect();
    const { slug } = request.query;
    if (request.method === "GET") {
      const plant = await Plant.findOne({ slug });

      if (!plant) {
        return response.status(404).json({ status: "No Plant found!" });
      }
      return response.status(200).json(plant);
    }

    if (request.method === "DELETE") {
      const deleted = await Plant.findOneAndDelete({ slug });
      if (!deleted) {
        return response.status(404).json({ status: "No Plant found!" });
      }
      return response
        .status(200)
        .json({ status: `Plant${slug} is successfully deleted.` });
    }

    if (request.method === "PUT") {
      const plantData = request.body;

      //check if plant exisits to compare names
      const existingPlant = await Plant.findOne({ slug });
      if (!existingPlant) {
        return response.status(404).json({ status: "No Plant found!" });
      }

      // only new slug when name changed
      if (plantData.name && plantData.name !== existingPlant.name) {
        let baseSlug = slugify(plantData.name);
        let newSlug = baseSlug;
        let counter = 1;

        // does this name exisits? yes + number
        while (
          await Plant.findOne({
            slug: newSlug,
            _id: { $ne: existingPlant._id },
          })
        ) {
          newSlug = `${baseSlug}-${counter}`;
          counter++;
        }

        plantData.slug = newSlug;
      }

      const updated = await Plant.findOneAndUpdate({ slug }, plantData, {
        new: true,
      });
      if (!updated) {
        return response.status(404).json({ status: "No Plant found!" });
      }
      return response
        .status(200)
        .json({ status: `Plant${slug} is successfully updated.` });
    }
    return response.status(405).json({ status: "Method not allowed!" });
  } catch (error) {
    return response.status(500).json({
      status: "Server error",
      error: error.message,
    });
  }
}
