import React from "react"
import { EffectComposer, N8AO, Bloom, Vignette, ToneMapping } from "@react-three/postprocessing"
import { ToneMappingMode } from "postprocessing"
import { useControls } from "leva"
import { POSTFX } from "../config/scene.config"

const PostFX = () => {
  const fx = useControls(
    "Post-processing",
    {
      enabled: POSTFX.enabled,
      ao: POSTFX.ao,
      aoIntensity: { value: POSTFX.aoIntensity, min: 0, max: 10, step: 0.1 },
      aoRadius: { value: POSTFX.aoRadius, min: 0.05, max: 3, step: 0.05 },
      bloom: POSTFX.bloom,
      bloomIntensity: { value: POSTFX.bloomIntensity, min: 0, max: 3, step: 0.05 },
      bloomThreshold: { value: POSTFX.bloomThreshold, min: 0, max: 1, step: 0.01 },
      vignette: POSTFX.vignette,
      vignetteDarkness: { value: POSTFX.vignetteDarkness, min: 0, max: 1, step: 0.01 },
    },
    { collapsed: true }
  )

  if (!fx.enabled) return null

  return (
    // remount when an effect is toggled, so the composer rebuilds its passes cleanly
    <EffectComposer
      key={`${fx.ao}-${fx.bloom}-${fx.vignette}`}
      multisampling={4}
      disableNormalPass
    >
      {fx.ao && (
        <N8AO halfRes aoRadius={fx.aoRadius} intensity={fx.aoIntensity} distanceFalloff={1} />
      )}
      {fx.bloom && (
        <Bloom
          mipmapBlur
          intensity={fx.bloomIntensity}
          luminanceThreshold={fx.bloomThreshold}
          luminanceSmoothing={0.2}
        />
      )}
      {fx.vignette && <Vignette offset={0.3} darkness={fx.vignetteDarkness} />}
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>
  )
}

export default PostFX