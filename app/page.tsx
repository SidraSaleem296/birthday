"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Confetti from "./components/Confetti"

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setShowConfetti(true)
  }, [])

  const handleClick = () => {
    router.push("/cake")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 to-purple-300 flex flex-col items-center justify-center">
      {showConfetti && <Confetti />}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">Happy Birthday Sumiyah!</h1>
      <p className="text-xl md:text-2xl text-white mb-8 text-center">Click Anywhere to Begin Your Adventure</p>
      <button
        onClick={handleClick}
        className="bg-white text-pink-500 px-6 py-3 rounded-full text-xl hover:bg-pink-100 transition-colors"
      >
        Start Celebration
      </button>
    </div>
  )
}

