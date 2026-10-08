import React, { Suspense, lazy } from "react"
import { useControls } from "leva"

const Perf = lazy(() => import("r3f-perf").then((m) => ({ default: m.Perf })))

const PerfMonitor = () => {
  const { showPerf } = useControls("Debug", { showPerf: false })
  if (!showPerf) return null

  return (
    <Suspense fallback={null}>
      <Perf position="top-left" />
    </Suspense>
  )
}

export default PerfMonitor