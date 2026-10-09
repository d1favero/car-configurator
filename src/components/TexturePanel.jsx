import React from "react"
import Panel from "./ui/Panel"
import ThumbnailButton from "./ui/ThumbnailButton"
import { useConfigurator, useActiveModel } from "../store/useConfigurator"

const TexturePanel = () => {
  const model = useActiveModel()
  const activeTextures = useConfigurator((s) => s.activeTextures)
  const selectTexture = useConfigurator((s) => s.selectTexture)

  return (
    <Panel
      title="Personalizar"
      subtitle="Escolha a pintura do seu carro."
      className="order-3 land:w-28 land:overflow-y-auto land:px-2
        desk:absolute desk:right-6 desk:top-6 desk:max-h-[calc(100%-3rem)] desk:w-80 desk-lg:w-96"
    >
      {model.parts.map((part) => (
        <section key={part.nodeId} className="mb-3 last:mb-0 desk:mb-4">
          <h3 className="mb-2 hidden text-sm font-medium text-white/80 desk:block">
            {part.label}
          </h3>
          <div className="flex gap-3 overflow-x-auto land:flex-col land:items-center land:overflow-x-visible desk:grid desk:grid-cols-2 desk:overflow-visible">
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