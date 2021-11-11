import type { NextPage } from 'next'
import React, { useRef, useState } from 'react'

const Root: NextPage = () => {
  return (
    <div className="relative w-[600px] h-[550px]">
      <div className="absolute top-0 left-0">
        <iframe
          src="https://nextjs.org/docs/getting-started"
          width="600"
          height="550"
        ></iframe>
      </div>
    </div>
  )
}

export default Root
