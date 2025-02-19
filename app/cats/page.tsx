"use client"

import { useState } from "react"
import Image from "next/image"

const catImages = [
  {
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    caption: "This one reminds me of you—cute and full of sass!",
  },
  {
    src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
    caption: "Look at those big eyes... just like yours, Sumiyah!",
  },
  {
    src: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=800&q=80",
    caption: "Adorable and playful, just like someone I know!",
  },
  {
    src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
    caption: "This kitty's smile is as bright as yours!",
  },
]

export default function Cats() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  const handleImageClick = (src: string) => {
    setEnlargedImage(src)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 p-8 pt-20">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">Because You Love Cats!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {catImages.map((cat, index) => (
          <div key={index} className="relative">
            <Image
              src={cat.src || "/placeholder.svg"}
              alt={`Cat ${index + 1}`}
              width={400}
              height={300}
              objectFit="cover"
              className="rounded-lg cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleImageClick(cat.src)}
            />
            <p className="mt-2 text-center text-blue-600">{cat.caption}</p>
          </div>
        ))}
      </div>
      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setEnlargedImage(null)}
        >
          <Image
            src={enlargedImage || "/placeholder.svg"}
            alt="Enlarged cat"
            width={800}
            height={600}
            objectFit="contain"
          />
        </div>
      )}
    </div>
  )
}

