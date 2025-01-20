import { motion } from "framer-motion"
import { Code, Bug, Smartphone } from "lucide-react"

export default function Hobbies() {
  const hobbies = [
    { name: "Coding", icon: Code, description: "Passionate about creating elegant solutions through code." },
    { name: "Exploiting", icon: Bug, description: "Uncovering vulnerabilities to improve system security." },
    { name: "Pen Testing", icon: Smartphone, description: "Evaluating system security through simulated attacks." },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Hobbies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between text-center bg-gray-900 p-6 rounded-lg h-full"
          >
            <hobby.icon className="w-16 h-16 mb-4 text-white" />
            <h3 className="text-2xl font-semibold mb-4">{hobby.name}</h3>
            <p className="text-gray-400">{hobby.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

