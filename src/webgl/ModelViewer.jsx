import React, { useEffect, useMemo } from "react"
import * as THREE from "three"
import { useThree } from "@react-three/fiber"
import { useGLTF, useTexture } from "@react-three/drei"
import { useControls } from "leva"
import { useConfigurator, useActiveModel } from "../store/useConfigurator"
import { getTexture } from "../config/models.config"
import { PAINT } from "../config/scene.config"

function Part({ node, part, paint }) {
  const activeValue = useConfigurator((s) => s.activeTextures[part.nodeId])
  const { texture } = getTexture(part, activeValue)
  const { map, alphaMap } = useTexture({ map: texture, alphaMap: part.alphaMap })
  const gl = useThree((s) => s.gl)
  const maxAniso = gl.capabilities.getMaxAnisotropy()

  map.flipY = false
  map.colorSpace = THREE.SRGBColorSpace
  map.anisotropy = maxAniso
  alphaMap.flipY = false
  alphaMap.anisotropy = maxAniso

  return (
    <mesh
      geometry={node.geometry}
      position={part.position}
      rotation={part.rotation}
      scale={part.scale}
    >
      <meshPhysicalMaterial
        map={map}
        alphaMap={alphaMap}
        transparent
        side={THREE.DoubleSide}
        {...paint}
        {...part.material} // optional per-part overrides from the model config
      />
    </mesh>
  )
}

function ModelViewer(props) {
  const model = useActiveModel()
  const setLoaded = useConfigurator((s) => s.setLoaded)

  const paint = useControls(
    "Paint",
    {
      metalness: { value: PAINT.metalness, min: 0, max: 1, step: 0.01 },
      roughness: { value: PAINT.roughness, min: 0, max: 1, step: 0.01 },
      envMapIntensity: { value: PAINT.envMapIntensity, min: 0, max: 3, step: 0.05 },
      clearcoat: { value: PAINT.clearcoat, min: 0, max: 1, step: 0.01 },
      clearcoatRoughness: { value: PAINT.clearcoatRoughness, min: 0, max: 1, step: 0.01 },
    },
    { collapsed: true }
  )

  const { nodes } = useGLTF(model.path)

  const texturePaths = useMemo(
    () => model.parts.flatMap((p) => [p.alphaMap, ...p.textures.map((t) => t.texture)]),
    [model]
  )
  useTexture(texturePaths) // suspends until every texture of this model is cached

  useEffect(() => setLoaded(), [model, setLoaded])

  return (
    <group {...props} dispose={null}>
      {model.parts.map((part) => {
        const node = nodes[part.nodeId]
        return node ? <Part key={part.nodeId} node={node} part={part} paint={paint} /> : null
      })}
    </group>
  )
}

export default ModelViewer