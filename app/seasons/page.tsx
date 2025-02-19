"use client"

import { useState } from "react"
import Image from "next/image"

const seasons = [
  {
    name: "Spring",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
    quote: "May your life bloom with endless possibilities.",
  },
  {
    name: "Summer",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80",
    quote: "May your days be as bright and warm as summer sunshine.",
  },
  {
    name: "Autumn",
    image: "https://images.unsplash.com/photo-1507371341162-763b5e419408?auto=format&fit=crop&w=800&q=80",
    quote: "May you find beauty in every change life brings.",
  },
  {
    name: "Winter",
    image: "https://images.unsplash.com/photo-1457269449834-928af64c684d?auto=format&fit=crop&w=800&q=80",
    quote: "May you always find warmth in the coldest of times.",
  },
]

export default function Seasons() {
  const [selectedSeason, setSelectedSeason] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 p-8 pt-20">
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-8 text-center">
        خدا کرے یہ سب موسم ہمیشہ تمہارے لیے خوشیاں لائیں
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {seasons.map((season) => (
          <div key={season.name} className="relative cursor-pointer" onClick={() => setSelectedSeason(season.name)}>
            <Image
              src={season.image || "/placeholder.svg"}
              alt={season.name}
              width={300}
              height={200}
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold rounded-lg opacity-0 hover:opacity-100 transition-opacity">
              {season.name}
            </div>
          </div>
        ))}
      </div>
      {selectedSeason && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg max-w-md mx-auto">
          <p className="text-lg text-green-600 text-center">{seasons.find((s) => s.name === selectedSeason)?.quote}</p>
        </div>
      )}
    </div>
  )
}

