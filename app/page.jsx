"use client"

import Button from "@/components/Button"
import Typewriter from "typewriter-effect"

function page() {
  return (
    <div className='app-wrapper'>
      <div className="title-wrapper text-white text-center m-auto mt-[10rem] w-fit">
        <h1 className='title text-9xl' id="title">
          <Typewriter options={{autoStart: true, loop: false, cursorClassName: "typewriter-cursor"}} onInit={(typewriter) => {
            typewriter.typeString("Dream Keeper").start()
          }}/>
        </h1>
        <p className="text-3xl">Améliorer votre rappelle onirique.</p>
      </div>
      <div className="options-wrapper flex justify-center mt-5">
        <Button type={"primary"}>Se connecter</Button>
        <Button type={"primary"}>Créer un compte</Button>
      </div>
    </div>
  )
}
export default page
