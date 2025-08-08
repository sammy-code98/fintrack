import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-gray-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-4.35-4.35m-2.25-3.9a6 6 0 11-12 0 6 6 0 0112 0z"
        />
      </svg>
      <h4 className="text-lg font-semibold text-[#1B2528]">No results found</h4>
      <p className="text-sm text-muted-foreground mt-1">Try adjusting your search or filter to find what you&apos;re looking for.</p>
    </div>
  )
}
