import React from "react"
import Panel from "./ui/Panel"
import ThumbnailButton from "./ui/ThumbnailButton"
import { MODEL_CONFIG, MODEL_IDS } from "../config/models.config"
import { useConfigurator } from "../store/useConfigurator"

const ModelPanel = () => {
  const modelId = useConfigurator((s) => s.modelId)
  const selectModel = useConfigurator((s) => s.selectModel)

  return (
    <Panel
      title="Modelos"
      subtitle="Escolha um carro base para começar."
      className="order-1 land:w-28 land:overflow-y-auto land:px-2
        desk:absolute desk:left-6 desk:top-6 desk:max-h-[calc(100%-3rem)] desk:w-72 desk-lg:w-80"
    >
      <div className="flex gap-3 overflow-x-auto land:flex-col land:items-center land:overflow-x-visible desk:flex-col desk:overflow-visible">
        {MODEL_IDS.map((id) => (
          <ThumbnailButton
            key={id}
            image={MODEL_CONFIG[id].thumbnail}
            label={MODEL_CONFIG[id].label}
            active={id === modelId}
            onClick={() => selectModel(id)}
          />
        ))}
      </div>
    </Panel>
  )
}

export default ModelPanel