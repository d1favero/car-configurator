// src/components/Loader.jsx
import React, { useEffect, useRef, useState } from "react"
import { useConfigurator } from "../store/useConfigurator"
import { SCENE_BG } from "../config/scene.config"

const MIN_VISIBLE_MS = 300

const Loader = () => {
  const isLoading = useConfigurator((s) => s.isLoading)
  const [visible, setVisible] = useState(isLoading)
  const shownAt = useRef(Date.now())

  useEffect(() => {
    if (isLoading) {
      shownAt.current = Date.now()
      setVisible(true)
      return
    }
    const remaining = MIN_VISIBLE_MS - (Date.now() - shownAt.current)
    const id = setTimeout(() => setVisible(false), Math.max(0, remaining))
    return () => clearTimeout(id)
  }, [isLoading])

  return (
    <div
      role="status"
      aria-busy={visible}
      style={{ backgroundColor: SCENE_BG }}
      className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-4
        transition-opacity duration-300 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <img src="/images/stlFlix-logo.png" alt="STLAI" className="h-14 w-auto" />
      <div className="flex gap-2">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="h-2 w-2 animate-bounce rounded-full bg-amber-400"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
        Carregando modelo...
      </p>
    </div>
  )
}

export default Loader