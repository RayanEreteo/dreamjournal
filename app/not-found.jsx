import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import Cross from "@/app/assets/cross.svg"

function notFound() {
  return (
    <div className='not-found w-[100vw] h-[100vh] flex items-center justify-center'>
        <div className="content text-center">
          <Image src={Cross} alt='cross' width={200} className='m-auto'/>
          <h1 className='text-white text-4xl'>Oops, cette page n'existe pas....</h1>
          <br />
          <Link className='text-cyan-500 text-4xl underline' href={'/'}>Revenir en lieu sur</Link>
        </div>
    </div>
  )
}

export default notFound