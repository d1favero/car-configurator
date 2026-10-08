export const MODEL_CONFIG = {
  stlaiCar: {
    enabled: true,
    label: "STLAI Car",
    path: "/models/StlAI_Car.glb",
    thumbnail: "/thumbnails/StlAiCar.png",
    parts: [
      {
        nodeId: "StlAI_Car",
        label: "Cor",
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: 1,
        material: {metalness: 0.35, roughness: 0.35},
        defaultTexture: "stlai-a",
        alphaMap: "/textures/StlAI_Car/StlAiCar_Alpha.png",
        textures: [
          {
            name: "Color A",
            value: "stlai-a",
            texture: "/textures/StlAI_Car/StlAiCar_A.png",
            thumbnail: "/thumbnails/StlAiCar_A.png"
          },
          {
            name: "Color B",
            value: "stlai-b",
            texture: "/textures/StlAI_Car/StlAiCar_B.png",
            thumbnail: "/thumbnails/StlAiCar_B.png"
          }
        ]
      },
    ],
  },


  stlflixCar:{
    enabled: true,
    label: "STLFlix Car",
    path: "/models/StlFlix_Car.glb",
    thumbnail: "/thumbnails/StlFlixCar.png",
    parts: [
      {
        nodeId: "StlFlix_Car",
        label: "Cor",
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: 1,
        material: {metalness: 0.3, roughness: 0.35},
        defaultTexture: "stlflix-a",
        alphaMap: "/textures/StlFlix_Car/StlFlix_Car_Alpha.png",
        textures: [
          {
            name: "Color A",
            value: "stlflix-a",
            texture: "/textures/StlFlix_Car/StlFlix_Car_A.png",
            thumbnail: "/thumbnails/StlFlixCar_A.png"
          },
          {
            name: "Color B",
            value: "stlflix-b",
            texture: "/textures/StlFlix_Car/StlFlix_Car_B.png",
            thumbnail: "/thumbnails/StlFlixCar_B.png"
          }
        ]
      },
    ],
  }
}

export const MODEL_IDS = Object.keys(MODEL_CONFIG).filter(id => MODEL_CONFIG[id].enabled)

export const getDefaultTextures = (modelId) => Object.fromEntries(MODEL_CONFIG[modelId].parts.map((p) => [p.nodeId, p.defaultTexture]  )) 

export const getTexture = (part,value) => part.textures.find((t) => t.value === value) ?? part.textures[0]


