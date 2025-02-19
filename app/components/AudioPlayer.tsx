"use client"

import { useState, useEffect, useRef } from "react"

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} loop>
        <source src="/birthday-music.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={togglePlay}
        className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
      >
        {isPlaying ? "🔇" : "🔊"}
      </button>
    </div>
  )
}

export default AudioPlayer

