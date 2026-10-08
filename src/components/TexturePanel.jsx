// src/components/TexturePanel.jsx
import React from "react"
import Panel from "./ui/Panel"
import ThumbnailButton from "./ui/ThumbnailButton"
import { useConfigurator, useActiveModel } from "../store/useConfigurator"

const TexturePanel = () => {
  const model = useActiveModel()
  const activeTextures = useConfigurator((s) => s.activeTextures)
  const selectTexture = useConfigurator((s) => s.selectTexture)

  return (
<Panel title="Personalizar" className="md:w-72 lg:w-96 xl:w-[36rem]">
  {model.parts.map((part) => (
    <section key={part.nodeId} className="mb-4 last:mb-0">
      <h3 className="mb-2 text-sm text-neutral-300">{part.label}</h3>
      <div className="flex gap-3 overflow-x-auto md:grid md:grid-cols-2 md:overflow-visible">
            {part.textures.map((tex) => (
              <ThumbnailButton
                key={tex.value}
                image={tex.thumbnail}
                label={tex.name}
                active={activeTextures[part.nodeId] === tex.value}
                onClick={() => selectTexture(part.nodeId, tex.value)}
              />
            ))}
          </div>
        </section>
      ))}
    </Panel>
  )
}

export default TexturePanel