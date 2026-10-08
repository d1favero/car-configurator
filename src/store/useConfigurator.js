import {create} from 'zustand'
import {MODEL_CONFIG, MODEL_IDS, getDefaultTextures} from '../config/models.config'

const initialModelId = MODEL_IDS[0]

export const useConfigurator = create((set, get) => ({
  modelId: initialModelId,
  activeTextures: getDefaultTextures(initialModelId), // { [nodeId]: textureValue }
  isLoading: true,

  selectModel: (modelId) => {
    if (modelId === get().modelId) return
    set({
      modelId,
      activeTextures: getDefaultTextures(modelId),
      isLoading: true,
    })
  },

  selectTexture: (nodeId, value) =>
    set((s) => ({ activeTextures: { ...s.activeTextures, [nodeId]: value } })),

  setLoaded: () => set({ isLoading: false }),
}))

export const useActiveModel = () => useConfigurator((s) => MODEL_CONFIG[s.modelId])