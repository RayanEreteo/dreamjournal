"use client";

import Button from "@/components/Button";
import Proscard from "@/components/Proscard";
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
        <div className="title-wrapper text-white text-center m-auto mt-[10rem] w-fit">
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
        <div className="sm:block hidden benefits-container m-auto w-fit text-center mt-[10rem]">
          <h1 className="sm:text-6xl text-white text-3xl">Pourquoi utiliser Dream Keeper ? </h1>
          <div className="card-container flex flex-row items-center justify-around mt-[4rem]">
            <Proscard prostitle={"Journal des rêves inclus."} prosdesc={"Créer un compte pour accéder à un journal des rêves et écrivez vos rêves au réveil sur n'importe quel appareil."}/>
            <Proscard prostitle={"Découvrez des techniques de mémorisation."} prosdesc={"Découvrez plusieurs techniques pour se souvenir de vos rêves."}/>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default page;
