"use client"

import Typewriter from "typewriter-effect"

function page() {
  return (
    <div className='app-wrapper w-[100vw] h-[100vh]'>
      <div className="title-wrapper text-white text-center m-auto w-fit">
        <h1 className='title text-9xl' id="title">
          <Typewriter options={{autoStart: true, loop: false}} onInit={(typewriter) => {
            typewriter.typeString("Dream Keeper").start()
          }}/>
        </h1>
        <p className="text-3xl">Améliorer votre rappelle onirique.</p>
      </div>
    </div>
  )
}
export default page
