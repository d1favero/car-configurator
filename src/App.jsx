// src/App.jsx
import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Navbar from "./layout/Navbar"
import Experience from "./webgl/Experience"
import ModelPanel from "./components/ModelPanel"
import TexturePanel from "./components/TexturePanel"
import DownloadButton from "./components/DownloadButton"
import Loader from "./components/Loader"
import { SCENE_BG } from "./config/scene.config"
import DevPanel from "./components/DevPanel"

function App() {
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      <Navbar />
      <DevPanel />

      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <ModelPanel />

        <div
          className="relative min-h-0 min-w-0 flex-1"
          style={{ backgroundColor: SCENE_BG }}
        >
          <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 2, 6], fov: 50 }}
            style={{ width: "100%", height: "100%" }}
          >
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>

          <DownloadButton />
          <Loader />
        </div>

        <TexturePanel />
      </div>
    </div>
  )
}

export default App