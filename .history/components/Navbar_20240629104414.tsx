import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
        <Link href="/" className='flex items-center gap-1'>
            <Image src="/icons/logo.svg" width={32} height={32} alt='Zoom logo' className='max-sm:size-10' />
            
        </Link>
    </div>
  )
}

export default Navbar