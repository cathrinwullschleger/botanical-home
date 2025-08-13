import "dotenv/config";
console.log("MONGODB_URI:", process.env.MONGODB_URI);

import dbConnect from "../db/connect.js";
import Plant from "../db/models/Plant.js";
import slugify from "slugify";

async function addSlugs() {
  await dbConnect();

  const plants = await Plant.find({ slug: { $exists: false } });

  for (const plant of plants) {
    const slug = slugify(plant.name, { lower: true, strict: true });
    plant.slug = slug;
    await plant.save();
  }

  process.exit();
}

addSlugs();
