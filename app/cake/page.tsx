"use client"

import { useState } from "react"
import Image from "next/image"
import Confetti from "../components/Confetti"

export default function Cake() {
  const [candlesLit, setCandlesLit] = useState(5)
  const [showFireworks, setShowFireworks] = useState(false)

  const handleCandleClick = () => {
    if (candlesLit > 0) {
      setCandlesLit(candlesLit - 1)
      if (candlesLit === 1) {
        setShowFireworks(true)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 flex flex-col items-center justify-center p-4">
      {showFireworks && <Confetti />}
      <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 text-center">Blow Out the Candles!</h1>
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <Image
          src="/deva-williamson-rHz-DkDgA1k-unsplash.jpg"
          alt="Birthday cake"
          fill
        />
        {[...Array(candlesLit)].map((_, index) => (
          <div
            key={index}
            className="absolute w-4 h-8 bg-yellow-400 animate-flicker cursor-pointer"
            style={{
              top: "20%",
              left: `${20 + index * 15}%`,
              transformOrigin: "bottom",
              transform: "rotate(-5deg)",
            }}
            onClick={handleCandleClick}
          />
        ))}
      </div>
      {showFireworks && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg max-w-md text-center">
          <p className="text-lg text-purple-600">
            Your wish has come true, Sumiyah!
            <br />
            Happy Birthday from API 2.0!
          </p>
        </div>
      )}
    </div>
  )
}

