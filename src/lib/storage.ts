import { v2 as cloudinary } from "cloudinary";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { isCloudinaryConfigured } from "@/lib/env";

function configureCloudinary() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

export async function uploadMedia(file: File): Promise<{ url: string; publicId?: string }> {
  const bytes = Buffer.from(await file.arrayBuffer());

  if (isCloudinaryConfigured()) {
    configureCloudinary();
    const uploaded = await new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "desynt", resource_type: "auto" }, (error, result) => {
          if (error || !result) reject(error ?? new Error("Cloudinary upload failed"));
          else resolve({ secure_url: result.secure_url, public_id: result.public_id });
        })
        .end(bytes);
    });
    return { url: uploaded.secure_url, publicId: uploaded.public_id };
  }

  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadsDir, { recursive: true });
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const filename = `${Date.now()}-${safeName}`;
  await writeFile(path.join(uploadsDir, filename), bytes);
  return { url: `/uploads/${filename}` };
}

export async function deleteMedia(publicId?: string) {
  if (!publicId || !isCloudinaryConfigured()) return;
  configureCloudinary();
  await cloudinary.uploader.destroy(publicId);
}
