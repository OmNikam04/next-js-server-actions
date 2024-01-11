import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full px-6 flex justify-end gap-4 ">
        <Link href={`/`}>Home</Link>
        <Link href={`/`}>Products</Link>
        <Link href={`/`}>Contact</Link>
    </div>
  )
}

export default Navbar