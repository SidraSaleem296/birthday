"use client"

import { useEffect, useState } from "react"

export default function Poetry() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < 2 ? prev + 1 : prev))
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8 text-center">A Thoughtful Note Just for You</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <p className="text-2xl md:text-3xl text-center font-serif mb-4" style={{ direction: "rtl" }}>
          {visibleLines >= 1 && "اچھا ہے دل کے پاس رہے پاسبان عقل،"}
          <br />
          {visibleLines >= 2 && "لیکن کبھی کبھی اسے تنہا بھی چھوڑ دے۔"}
        </p>
        <p className="text-lg text-center text-gray-600 mt-4">
          "It's good to have wisdom guide your heart, but sometimes let your heart wander freely."
        </p>
      </div>
      <p className="mt-8 text-lg text-pink-600 text-center">
        From API 2.0, wishing you moments of joy and reflection on your special day, Sumiyah.
      </p>
    </div>
  )
}

