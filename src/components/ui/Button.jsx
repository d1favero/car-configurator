import React from "react"

const Button = ({ icon, children, className = "", ...props }) => (
  <button
    type="button"
    className={`flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-indigo-500
      px-4 py-2 text-xs font-semibold text-white shadow-glow transition
      hover:brightness-110 active:scale-95 disabled:cursor-wait disabled:opacity-60
      desk:px-6 desk:py-2.5 desk:text-sm ${className}`}
    {...props}
  >
    {icon}
    {children}
  </button>
)

export default Button