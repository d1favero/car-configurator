export const SCENE_BG = "#0c0a1d";

export const CAMERA = {
  targetAzimuth: Math.PI / 4,
  targetPolar: Math.PI / 2.6,
  sweepMin: Math.PI / 3,
  sweepMax: Math.PI,
  smoothTime: 0.9,
  minDistance: 3,
  maxDistance: 12,
  fitPadding: {
    paddingTop: 0.4,
    paddingBottom: 0.7,
    paddingLeft: 0.4,
    paddingRight: 0.4,
  },
};

export const LIGHTING = {
  hdri: "/hdri/cedar_bridge_sunset_1_1k.hdr",
  ambient: 0.15,
  environment: 1.55, // multiplier applied to every Lightformer
};

export const FLOOR = {
  color: "#1a1530",
  mirror: 0,
  mixStrength: 0.4,
  mixBlur: 0,
  blurX: 0,
  blurY: 0,
  metalness: 0,
  roughness: 0.8,
  depthScale: 0.7,
  minDepthThreshold: 0.45,
  maxDepthThreshold: 1.3,
  envMapIntensity: 0.15,
}

export const SHADOWS = {
  opacity: 0.8,
  blur: 1.5,
  far: 5.4,
  scale: 17.5,
};

export const PAINT = {
  metalness: 0.2,
  roughness: 0.4,
  envMapIntensity: 0.45,
  clearcoat: 1,
  clearcoatRoughness: 0.03,
};

// scene.config.js
export const POSTFX = {
  enabled: true,
  ao: true,
  aoIntensity: 2,
  aoRadius: 0.5,
  bloom: true,
  bloomIntensity: 0.3,
  bloomThreshold: 0.9,
  vignette: true,
  vignetteDarkness: 0.5,
};
