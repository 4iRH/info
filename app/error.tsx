"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

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
            Oops!
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <h2 className="text-2xl font-semibold mb-6">SOMETHING WENT WRONG</h2>
            <p className="text-[#B5BAC1] mb-8">
              Our hamsters are having a bit of trouble running their wheels. Give them a moment to catch their breath.
            </p>
            <div className="space-x-4">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors duration-300"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#4F545C] hover:bg-[#686D73] transition-colors duration-300"
              >
                Return Home
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-sm text-[#B5BAC1]"
        >
          <p>If the problem persists, try:</p>
          <div className="mt-4 space-y-2">
            <p>• Clearing your browser cache</p>
            <p>• Checking your internet connection</p>
            <p>• Coming back in a few minutes</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

