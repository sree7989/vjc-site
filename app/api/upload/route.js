import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Ensure upload directory exists (async)
    const uploadDir = path.join(process.cwd(), "public/uploads");
    await fs.promises.mkdir(uploadDir, { recursive: true });

    // Generate a safe unique filename
    const timestamp = Date.now();
    const safeFileName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const fileName = `${timestamp}-${safeFileName}`;
    const filePath = path.join(uploadDir, fileName);

    // Write file
    await fs.promises.writeFile(filePath, buffer);

    return NextResponse.json({ url: `/uploads/${fileName}` });
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
}