"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#313338] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-7xl font-bold mb-4"
          >
            404
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <h2 className="text-2xl font-semibold mb-6">WRONG TURN?</h2>
            <p className="text-[#B5BAC1] mb-8">
              You look lost, stranger. You know what helps when you're lost? A piping hot bowl of noodles. Take a seat,
              we're frantically at work here cooking up something good.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors duration-300"
            >
              Return Home
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-sm text-[#B5BAC1]"
        >
          <p>Lost? You can also try:</p>
          <div className="mt-4 space-y-2">
            <p>• Double-checking the URL</p>
            <p>• Hitting the refresh button</p>
            <p>• Checking your internet connection</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

