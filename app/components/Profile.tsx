import { motion } from "framer-motion"
import Image from "next/image"

export default function Profile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-center mb-24"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 md:mb-0 md:mr-8"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-01-20%2005.32.45-CPU8mCjMVa4ozKudzaoKuq09u1pcd5.jpeg"
          alt="Ali Al-sharif"
          width={150}
          height={150}
          className="rounded-full border-4 border-white"
          priority
        />
      </motion.div>
      <div className="text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ali Al-sharif
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          From Kuwait 🇰🇼
        </motion.p>
      </div>
    </motion.section>
  )
}

