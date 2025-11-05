"use client";

import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <>
      <motion.div
        className="text-7xl leading-none tracking-[2px] mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        NER
      </motion.div>
      <motion.div
        className="text-2xl tracking-wide mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        Seguinos en Instagram para conocer nuestros productos :)
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
      </motion.div>
    </>
  );
}
