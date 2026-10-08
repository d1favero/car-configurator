import React from "react"
    
const Button = ({ icon, children, className = "", ...props }) => (
  <button
    type="button"
    className={`flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2.5 text-sm
      font-semibold text-neutral-900 shadow-lg transition hover:bg-amber-300
      active:scale-95 disabled:cursor-wait disabled:opacity-60 ${className}`}
    {...props}
  >
    {icon}
    {children}
  </button>
)
export default Button
