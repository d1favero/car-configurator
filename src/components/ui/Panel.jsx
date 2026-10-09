import React from "react"

const Panel = ({ title, subtitle, className = "", children }) => (
  <aside
    className={`shrink-0 bg-surface px-4 py-3 text-white
      desk:z-20 desk:overflow-y-auto desk:rounded-3xl desk:border desk:border-white/10
      desk:bg-white/[0.04] desk:p-6 desk:shadow-2xl desk:backdrop-blur-xl ${className}`}
  >
    <h2 className="mb-2 text-sm font-semibold desk:mb-0 desk:text-2xl">{title}</h2>
    {subtitle && (
      <p className="mb-4 mt-1 hidden text-sm text-white/60 desk:block">{subtitle}</p>
    )}
    {children}
  </aside>
)

export default Panel