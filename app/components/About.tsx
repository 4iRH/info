import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <motion.p
        className="text-xl leading-relaxed max-w-3xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        I'm a student with a passion for hacking and penetration testing. My expertise extends to iOS exploiting, and
        I'm a Tweak Developer for popular apps like Instagram and TikTok. I've successfully exploited numerous apps and
        discovered multiple vulnerabilities on Instagram. This hobby, pursued for educational purposes, fuels my
        curiosity and drive for cybersecurity excellence.
      </motion.p>
    </motion.section>
  )
}

