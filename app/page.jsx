"use client"

import Button from "@/components/Button"
import { motion } from "framer-motion"

function page() {
  return (
    <div className='app-wrapper'>
      <div className="title-wrapper text-white text-center m-auto mt-[10rem] w-fit">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, y: -60}} transition={{delay: 0.20, type: 'spring'}} >
          <h1 className='title text-9xl' id="title">Dream Keeper</h1>
        </motion.div>
        <p className="text-3xl">Améliorer votre rappelle onirique.</p>
      </div>
      <div className="options-wrapper flex justify-center mt-5">
        <Button type={"primary"}>Se connecter</Button>
      </div>
    </div>
  )
}
export default page
