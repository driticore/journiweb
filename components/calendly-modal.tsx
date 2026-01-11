"use client"

import { useEffect } from "react"
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
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

export function CalendlyModal({
  isOpen,
  onClose,
  calendlyUrl = "https://calendly.com/akadinso-osuagwu/30min?back=1&month=2026-01",
}: CalendlyModalProps) {
  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = "hidden"

    // Load Calendly CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    if (!document.querySelector(`link[href="${link.href}"]`)) {
      document.head.appendChild(link)
    }

    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true

    const existingScript = document.querySelector(`script[src="${script.src}"]`)

    if (!existingScript) {
      script.onload = () => {
        initializeCalendly()
      }
      document.body.appendChild(script)
    } else {
      // Script already loaded, just initialize
      initializeCalendly()
    }

    function initializeCalendly() {
      const container = document.getElementById("calendly-container")
      if (container && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: container,
        })
      }
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen, calendlyUrl])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div id="calendly-container" className="h-full w-full" />
      </div>
    </div>
  )
}
