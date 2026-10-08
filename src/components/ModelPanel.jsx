import React from 'react'
import Panel from './ui/Panel'
import ThumbnailButton from './ui/ThumbnailButton'
import {MODEL_CONFIG, MODEL_IDS} from '../config/models.config'
import {useConfigurator} from "../store/useConfigurator"

const ModelPanel = () => {
    const modelId = useConfigurator((s) => s.modelId)
    const selectModel = useConfigurator((s) => s.selectModel)

  return (
    <Panel title="Modelos" className="md:w-56 lg:w-72 xl:w-96">
      <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
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