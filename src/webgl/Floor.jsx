import React from "react"
import { MeshReflectorMaterial } from "@react-three/drei"
import { useControls } from "leva"
import {  FLOOR } from "../config/scene.config"

const Floor = () => {
  const f = useControls(
    "Floor",
    {
    color: FLOOR.color,mirror: { value: FLOOR.mirror, min: 0, max: 1, step: 0.01 },
      mixStrength: { value: FLOOR.mixStrength, min: 0, max: 20, step: 0.1 },
      mixBlur: { value: FLOOR.mixBlur, min: 0, max: 5, step: 0.1 },
      blurX: { value: FLOOR.blurX, min: 0, max: 1000, step: 10 },
      blurY: { value: FLOOR.blurY, min: 0, max: 1000, step: 10 },
      metalness: { value: FLOOR.metalness, min: 0, max: 1, step: 0.01 },
      roughness: { value: FLOOR.roughness, min: 0, max: 1, step: 0.01 },
      depthScale: { value: FLOOR.depthScale, min: 0, max: 5, step: 0.1 },
      minDepthThreshold: { value: FLOOR.minDepthThreshold, min: 0, max: 2, step: 0.05 },
      maxDepthThreshold: { value: FLOOR.maxDepthThreshold, min: 0, max: 3, step: 0.05 },
      envMapIntensity: { value: FLOOR.envMapIntensity, min: 0, max: 2, step: 0.01 },
    },
    { collapsed: true }
  )

  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
      <planeGeometry args={[60, 60]} />
      <MeshReflectorMaterial
        resolution={1024}
        mirror={f.mirror}
        blur={[f.blurX, f.blurY]}
        mixBlur={f.mixBlur}
        mixStrength={f.mixStrength}
        metalness={f.metalness}
        roughness={f.roughness}
        depthScale={f.depthScale}
        minDepthThreshold={f.minDepthThreshold}
        maxDepthThreshold={f.maxDepthThreshold}
        envMapIntensity={f.envMapIntensity}
        color={f.color}
      />
    </mesh>
  )
}

export default Floor