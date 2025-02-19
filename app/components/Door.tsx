"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface DoorProps {
  onOpen: () => void
}

const Door: React.FC<DoorProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
    setTimeout(onOpen, 1000) // Delay to allow door animation to complete
  }

  return (
    <div className="relative w-64 h-96 md:w-80 md:h-120 cursor-pointer" onClick={handleClick}>
      <Image
        src="https://images.unsplash.com/photo-1517003089378-47b87d7d0e95?auto=format&fit=crop&w=800&q=80"
        alt="Closed door"
        layout="fill"
        objectFit="contain"
        className={`transition-transform duration-1000 ${isOpen ? "rotate-y-90" : ""}`}
      />
      <Image
        src="https://images.unsplash.com/photo-1517003089378-47b87d7d0e95?auto=format&fit=crop&w=800&q=80"
        alt="Open door"
        layout="fill"
        objectFit="contain"
        className={`transition-opacity duration-1000 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      {isOpen && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="https://unsplash.com/photos/brown-bear-plush-toy-Zzgmde4_lYU"
            alt="Teddy bear"
            width={200}
            height={200}
            className="animate-bounce"
          />
        </div>
      )}
    </div>
  )
}

export default Door

