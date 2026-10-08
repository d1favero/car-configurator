import React from 'react'

const ThumbnailButton = ({image, label, active, onClick}) => (
    <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
    className={`group w-24 shrink-0 md:w-full rounded-lg p-1.5 text-left transition
      ${active
        ? "bg-neutral-800 ring-2 ring-amber-400"
        : "hover:bg-neutral-800 ring-1 ring-neutral-700"}`}
  >
    <img
      src={image}
      alt=""
      draggable={false}
      className="aspect-square w-full rounded-md object-cover"
    />
    <span
      className={`mt-1.5 block truncate text-xs ${
        active ? "text-amber-300" : "text-neutral-300"
      }`}
    >
      {label}
    </span>
  </button>
)

export default ThumbnailButton