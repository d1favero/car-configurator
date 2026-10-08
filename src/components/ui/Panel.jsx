import React from 'react'

const Panel = ({ title, className = "", children }) => (
  <aside
    className={`shrink-0 bg-neutral-900 p-3 text-neutral-100 md:overflow-y-auto md:p-4 ${className}`}
  >
    <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
      {title}
    </h2>
    {children}
  </aside>
)

export default Panel