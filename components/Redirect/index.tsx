"use client"

import { useEffect, useState } from "react"

const INSTAGRAM_URL = "https://www.instagram.com/ner.______/"

const Redirect = () => {
    const [countdown, setCountdown] = useState<number>(5)

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
        <div>
            <h2>Redireccionando... {countdown}</h2>
        </div>
    )
}

export default Redirect
