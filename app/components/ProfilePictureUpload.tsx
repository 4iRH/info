"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ProfilePictureUpload() {
  const [uploading, setUploading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUploading(true)

    const form = e.currentTarget
    const fileInput = Array.from(form.elements).find(
      (element) => (element as HTMLInputElement).name === "file",
    ) as HTMLInputElement

    const formData = new FormData()
    if (fileInput.files) {
      formData.append("file", fileInput.files[0])
    }

    try {
      const response = await fetch("/api/upload-profile-picture", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        // Update the NEXT_PUBLIC_PROFILE_PICTURE_URL with the new URL
        // This is a simplified example. In a real-world scenario, you'd update this in your backend.
        process.env.NEXT_PUBLIC_PROFILE_PICTURE_URL = data.url
        router.refresh() // Refresh the page to show the new profile picture
      } else {
        console.error("Failed to upload")
      }
    } catch (error) {
      console.error("Error uploading:", error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input type="file" name="file" accept="image/*" required />
      <button type="submit" disabled={uploading} className="ml-2 px-4 py-2 bg-white text-black rounded">
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </form>
  )
}

