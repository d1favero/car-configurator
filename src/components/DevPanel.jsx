// src/components/DevPanel.jsx
import React, { useEffect, useState } from "react"
import { Leva } from "leva"

const isToggleKey = (e) =>
  (e.ctrlKey || e.metaKey) && e.shiftKey && e.code === "KeyD"

const DevPanel = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const toggle = () => setOpen((o) => !o)

    const onKeyDown = (e) => {
      if (!isToggleKey(e)) return
      e.preventDefault() // stop the browser's "bookmark all tabs"
      toggle()
    }

    const onTouchStart = (e) => {
      if (e.touches.length === 4) toggle()
    }

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("touchstart", onTouchStart)
    }
  }, [])

  return <Leva hidden={!open} titleBar={{ title: "Dev tools" }} />
}

export default DevPanel