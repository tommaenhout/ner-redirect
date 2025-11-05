"use client";

import { motion } from "framer-motion";
import Redirect from "./Redirect";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5EFDE] text-[#4B3A33] px-6 py-24">
      <motion.div 
        className="text-7xl leading-none tracking-[2px] mb-10"
        style={{ fontFamily: "'Bacasime Antique', serif" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        NER
      </motion.div>
      <motion.div 
        className="text-2xl tracking-wide mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        Gracias por tu compra :)
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <Redirect />
      </motion.div>
    </div>
  );
}
