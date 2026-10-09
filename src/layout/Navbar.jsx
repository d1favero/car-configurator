import React from "react"

const Navbar = () => (
  <nav className="z-30 flex items-center justify-between border-b border-white/10 bg-surface/80 px-6 py-3 backdrop-blur-xl land:px-4 land:py-1.5">
    <img src="/images/stlFlix-logo.png" alt="STLAI" className="h-8 w-auto land:h-5" />
    <span className="hidden text-sm text-white/50 md:block land:hidden">Configurador 3D</span>
  </nav>
)

export default Navbar