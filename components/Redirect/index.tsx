"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const INSTAGRAM_URL = "https://www.instagram.com/ner.______/"

const Redirect = () => {
    const [countdown, setCountdown] = useState<number>(6)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1)
        }, 1000)

        if (countdown === 0) {
            clearInterval(timer)
            window.location.href = INSTAGRAM_URL
        }

        return () => clearInterval(timer)
    }, [countdown])

    return (
        <motion.div 
            className="flex items-center gap-2 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
            <span>Redireccionando...</span>
            <AnimatePresence mode="wait">
                <motion.span
                    key={countdown}
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="inline-block"
                > 
                    {"  " +  countdown}
                </motion.span>
            </AnimatePresence>
        </motion.div>
    )
}

export default Redirect
