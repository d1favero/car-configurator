import React, { useState } from "react"
import Button from "./ui/Button"
import { useConfigurator, useActiveModel } from "../store/useConfigurator"
import { getTexture } from "../config/models.config"
import { downloadModelZip } from "../utils/downloadZip"

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 4v12m0 0-5-5m5 5 5-5M5 20h14" />
  </svg>
)

const LABELS = {
  idle: "Download",
  working: "Gerando...",
  error: "Tentar novamente",
}

const DownloadButton = () => {
  const model = useActiveModel()
  const activeTextures = useConfigurator((s) => s.activeTextures)
  const isLoading = useConfigurator((s) => s.isLoading)
  const [status, setStatus] = useState("idle")

  const handleClick = async () => {
    setStatus("working")
    try {
      const texturePaths = [
        ...new Set(
          model.parts.map((p) => getTexture(p, activeTextures[p.nodeId]).texture)
        ),
      ]
      await downloadModelZip({ modelPath: model.path, texturePaths })
      setStatus("idle")
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <Button
      icon={<DownloadIcon />}
      onClick={handleClick}
      disabled={isLoading || status === "working"}
      className="absolute bottom-3 left-1/2 -translate-x-1/2 desk:bottom-6"
    >
      {LABELS[status]}
    </Button>
  )
}

export default DownloadButton