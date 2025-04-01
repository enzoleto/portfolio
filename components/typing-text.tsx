"use client"

import { useState, useEffect } from "react"

interface TypingTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
  className?: string
}

export function TypingText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = "",
}: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current full text from the array
        const fullText = texts[currentTextIndex]

        // If deleting
        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        } else {
          // If typing
          setCurrentText(fullText.substring(0, currentText.length + 1))
        }

        // If completed typing the current text
        if (!isDeleting && currentText === fullText) {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), delayBetweenTexts)
        }
        // If deleted the current text
        else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          // Move to the next text
          setCurrentTextIndex((currentTextIndex + 1) % texts.length)
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

