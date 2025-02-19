"use client"

import { useEffect, useState } from "react"

const Confetti = () => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([])

  useEffect(() => {
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"]
    const newConfetti = []

    for (let i = 0; i < 100; i++) {
      const left = Math.random() * 100
      const animationDuration = Math.random() * 3 + 2
      const color = colors[Math.floor(Math.random() * colors.length)]

      newConfetti.push(
        <div
          key={i}
          style={{
            position: "fixed",
            left: `${left}%`,
            top: "-5%",
            width: "10px",
            height: "10px",
            backgroundColor: color,
            borderRadius: "50%",
            animation: `fall ${animationDuration}s linear infinite`,
          }}
        />,
      )
    }

    setConfetti(newConfetti)
  }, [])

  return <>{confetti}</>
}

export default Confetti

