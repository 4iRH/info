import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get("file") as File | null

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
  }

  const buffer = await file.arrayBuffer()
  const filename = Date.now() + "_" + file.name.replaceAll(" ", "_")
  const filepath = path.join(process.cwd(), "public/uploads", filename)

  try {
    await writeFile(filepath, Buffer.from(buffer))
    return NextResponse.json({
      message: "File uploaded successfully",
      url: `/uploads/${filename}`,
    })
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
  }
}

