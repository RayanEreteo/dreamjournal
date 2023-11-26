"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";

function page() {
  return (
    <div className="app-wrapper">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="Option-title-anim"
      >
        <div className="title-wrapper text-white text-center m-auto mt-[20rem] w-fit">
          <h1
            className="sm:text-9xl title text-6xl font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-pink-600"
            id="title"
          >
            Dream Keeper
          </h1>
          <p className="text-3xl opacity-70">Développer votre mémoire onirique.</p>
        </div>
        <div className="options-wrapper flex items-center justify-between m-auto w-[300px] text-center mt-5">
          <Button type={"primary"} urlPath={"/login"}>
            Se connecter
          </Button>
          <Button type={"secondary"} urlPath={"/register"}>
            S'enregister
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
export default page;
