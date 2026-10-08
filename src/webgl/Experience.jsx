import React, { useCallback, useRef } from "react"
import {
  CameraControls,
  Center,
  ContactShadows,
  Environment,
  Lightformer,
} from "@react-three/drei"
import { useControls } from "leva"
import ModelViewer from "./ModelViewer"
import Floor from "./Floor"
import PostFX from "./PostFX"
import PerfMonitor from "./PerfMonitor.jsx"
import { useConfigurator } from "../store/useConfigurator"
import { SCENE_BG, CAMERA, LIGHTING, SHADOWS } from "../config/scene.config"

const randomBetween = (min, max) => min + Math.random() * (max - min)

const StudioEnvironment = ({ intensity }) => (
  <Environment key={intensity} files={LIGHTING.hdri} resolution={512}>
    <Lightformer form="rect" intensity={4 * intensity} position={[0, 5, 0]} rotation-x={Math.PI / 2} scale={[10, 2, 1]} />
    <Lightformer form="circle" intensity={6 * intensity} position={[0, 5, -9]} rotation-x={Math.PI / 2} scale={2} />
    <Lightformer form="circle" intensity={3 * intensity} position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={2} />
    <Lightformer form="circle" intensity={3 * intensity} position={[10, 1, 0]} rotation-y={-Math.PI / 2} scale={8} />
    {/* front fill: large soft panel facing the car */}
    <Lightformer form="rect" intensity={2 * intensity} position={[0, 1, 10]} rotation-y={Math.PI} scale={[10, 3, 1]} />
  </Environment>
)

const Experience = () => {
  const controlsRef = useRef()
  const sweepDir = useRef(1)
  const modelId = useConfigurator((s) => s.modelId)

  const lighting = useControls(
    "Lighting",
    {
      ambient: { value: LIGHTING.ambient, min: 0, max: 3, step: 0.05 },
      environment: { value: LIGHTING.environment, min: 0, max: 3, step: 0.05 },
    },
    { collapsed: true }
  )

  const shadows = useControls(
    "Shadows",
    {
      opacity: { value: SHADOWS.opacity, min: 0, max: 1, step: 0.01 },
      blur: { value: SHADOWS.blur, min: 0, max: 5, step: 0.1 },
      far: { value: SHADOWS.far, min: 0.5, max: 10, step: 0.1 },
      scale: { value: SHADOWS.scale, min: 1, max: 30, step: 0.5 },
    },
    { collapsed: true }
  )

  const camera = useControls(
    "Camera",
    {
      smoothTime: { value: CAMERA.smoothTime, min: 0.1, max: 3, step: 0.05 },
      minDistance: { value: CAMERA.minDistance, min: 0.5, max: 10, step: 0.1 },
      maxDistance: { value: CAMERA.maxDistance, min: 5, max: 30, step: 0.5 },
    },
    { collapsed: true }
  )

  const handleCentered = useCallback(({ container }) => {
    const controls = controlsRef.current
    if (!controls) return

    sweepDir.current *= -1
    const sweep = sweepDir.current * randomBetween(CAMERA.sweepMin, CAMERA.sweepMax)
    const lift = randomBetween(0.05, 0.35)

    // instant start pose: somewhere around the car, alternating sides
    controls.rotateTo(CAMERA.targetAzimuth + sweep, CAMERA.targetPolar - lift, false)
    controls.fitToBox(container, false, CAMERA.fitPadding)
    controls.dolly(-3, false)

    // animated orbit back to the 3/4 hero view
    controls.rotateTo(CAMERA.targetAzimuth, CAMERA.targetPolar, true)
    controls.fitToBox(container, true, CAMERA.fitPadding)
  }, [])

  return (
    <>
      <color attach="background" args={[SCENE_BG]} />
      <fog attach="fog" args={[SCENE_BG, 12, 30]} />

      <CameraControls
        ref={controlsRef}
        makeDefault
        smoothTime={camera.smoothTime}
        minDistance={camera.minDistance}
        maxDistance={camera.maxDistance}
        maxPolarAngle={Math.PI / 2 - 0.05}
      />

      <ambientLight intensity={lighting.ambient} />
      <StudioEnvironment intensity={lighting.environment} />

      <Center key={modelId} top onCentered={handleCentered}>
        <ModelViewer />
      </Center>

      <Floor />
      <ContactShadows
        position={[0, 0.01, 0]}
        opacity={shadows.opacity}
        scale={shadows.scale}
        blur={shadows.blur}
        far={shadows.far}
        resolution={1024}
      />

      <PerfMonitor />
      <PostFX />
    </>
  )
}

export default Experience