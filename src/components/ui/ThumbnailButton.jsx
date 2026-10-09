import React from "react"

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3 w-3 desk:h-3.5 desk:w-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12l5 5L20 7" />
  </svg>
)

const ThumbnailButton = ({ image, label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={`group relative w-20 shrink-0 rounded-xl p-1.5 text-left transition duration-300
      desk:w-full desk:rounded-2xl desk:p-2
      ${
        active
          ? "bg-brand/15 shadow-glow ring-2 ring-brand"
          : "bg-white/[0.03] ring-1 ring-white/10 hover:bg-white/[0.07] hover:ring-white/25"
      }`}
  >
    {active && (
      <span className="absolute right-1.5 top-1.5 z-10 grid h-5 w-5 place-items-center rounded-full bg-brand text-white shadow-glow desk:right-2 desk:top-2 desk:h-6 desk:w-6">
        <CheckIcon />
      </span>
    )}

    <div className="overflow-hidden rounded-lg desk:rounded-xl">
      <img
        src={image}
        alt=""
        draggable={false}
        className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
      />
    </div>

    <span
      className={`mt-1.5 block truncate text-[11px] font-medium desk:mt-2 desk:text-sm ${
        active ? "text-white" : "text-white/70"
      }`}
    >
      {label}
    </span>
  </button>
)

export default ThumbnailButton