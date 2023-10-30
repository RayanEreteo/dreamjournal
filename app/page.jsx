"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";

function page() {
  return (
    <div className="app-wrapper mb-6">
      <div className="title-wrapper text-white text-center m-auto mt-[10rem] w-fit">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: -20 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 className="title text-9xl" id="title">
            Dream Keeper
          </h1>
          <p className="text-3xl opacity-50">Améliorer votre rappelle onirique.</p>
        </motion.div>
      </div>
      <div className="options-wrapper flex justify-center mt-5">
        <motion.div whileHover={{scale: 1.1}}>
          <Button type={"primary"}>Se connecter</Button>
        </motion.div>
      </div>
    </div>
  );
}
export default page;
