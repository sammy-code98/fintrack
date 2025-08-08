import Image from 'next/image'
import React from 'react'

export default function Loader() {
  return (
    <div className='flex flex-col justify-center items-center space-y-3 py-8'>
      <div className='animate-ping'>
        <Image src="/logo.png" alt='logo' width={100} height={100} />
      </div>
      <div>
        <h3 className='text-lg text-[#1B2528] text-center'>Loading...</h3>
      </div>
    </div>
  )
}
