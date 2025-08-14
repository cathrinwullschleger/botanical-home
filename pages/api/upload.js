// Diese Datei als pages/api/upload.js speichern
import formidable from "formidable";
import cloudinary from "cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default async function handler(request, response) {
  if (request.method !== "POST" && request.method !== "PUT") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  try {
    const form = formidable({});
    const [fields, files] = await form.parse(request);

    // Prüfe ob ein Bild hochgeladen wurde
    if (!files.imageFile || !files.imageFile[0]) {
      return response.status(400).json({ message: "No image file provided" });
    }

    const file = files.imageFile[0];
    const { newFilename, filepath } = file;

    // Upload zu Cloudinary
    const result = await cloudinary.v2.uploader.upload(filepath, {
      public_id: newFilename,
      folder: "nf",
    });

    return response.status(200).json({
      secure_url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return response.status(500).json({
      message: "Upload failed",
      error: error.message,
    });
  }
}
