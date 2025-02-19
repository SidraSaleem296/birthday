import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import AudioPlayer from "./components/AudioPlayer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sumiyah's Birthday Celebration",
  description: "A special interactive birthday website for Sumiyah",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AudioPlayer />
        {children}
      </body>
    </html>
  )
}



import './globals.css'