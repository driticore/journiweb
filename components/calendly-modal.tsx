"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
  calendlyUrl?: string
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
      }) => void
    }
  }
}

export function CalendlyModal({
  isOpen,
  onClose,
  calendlyUrl = "https://calendly.com/akadinso-osuagwu/30min",
}: CalendlyModalProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = "hidden"

    // Clear previous widget (IMPORTANT)
    if (containerRef.current) {
      containerRef.current.innerHTML = ""
    }

    // Load Calendly CSS once
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://assets.calendly.com/assets/external/widget.css"
      document.head.appendChild(link)
    }

    const initCalendly = () => {
      if (containerRef.current && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: containerRef.current,
        })
      }
    }

    // Load script once
    if (!window.Calendly) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.onload = initCalendly
      document.body.appendChild(script)
    } else {
      initCalendly()
    }

    return () => {
      document.body.style.overflow = "unset"
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [isOpen, calendlyUrl])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm"
        >
          <X className="h-5 w-5" />
        </Button>

        <div ref={containerRef} className="h-full w-full" />
      </div>
    </div>
  )
}
