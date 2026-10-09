import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Navbar from "./layout/Navbar"
import Experience from "./webgl/Experience"
import ModelPanel from "./components/ModelPanel"
import TexturePanel from "./components/TexturePanel"
import DownloadButton from "./components/DownloadButton"
import Loader from "./components/Loader"
import DevPanel from "./components/DevPanel"
import { SCENE_BG } from "./config/scene.config"

function App() {
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-surface">
      <Navbar />
      <DevPanel />

      <main className="relative flex min-h-0 flex-1 flex-col land:flex-row desk:block">
        {/* portrait: middle row / landscape: middle column / desktop: full-bleed behind panels */}
        <div
          className="relative order-2 min-h-0 min-w-0 flex-1 desk:absolute desk:inset-0"
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

        <ModelPanel />
        <TexturePanel />
      </main>
    </div>
  )
}

export default App