"use client"

import { useState, useEffect } from "react"
import Confetti from "../components/Confetti"

export default function Message() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  const message = [
    "Dear Sumiyah,",
    "",
    "On this special day, I want you to know how much you mean to everyone around you.",
    "Your kindness, laughter, and love brighten every corner of our lives.",
    "May your year ahead be filled with joy, success, and countless blessings.",
    "",
    "With lots of love,",
    "API 2.0",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < message.length ? prev + 1 : prev))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSurpriseClick = () => {
    setShowConfetti(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-pink-200 flex flex-col items-center justify-center p-4">
      {showConfetti && <Confetti />}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8 text-center">A Special Farewell</h1>
        <div className="space-y-4">
          {message.slice(0, visibleLines).map((line, index) => (
            <p key={index} className="text-lg text-gray-700">
              {line}
            </p>
          ))}
        </div>
      </div>
      {visibleLines === message.length && (
        <button
          onClick={handleSurpriseClick}
          className="mt-8 bg-pink-500 text-white px-6 py-3 rounded-full text-xl hover:bg-pink-600 transition-colors"
        >
          Click Here for One Last Surprise!
        </button>
      )}
    </div>
  )
}

