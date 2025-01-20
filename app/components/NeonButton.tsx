import { motion } from "framer-motion"

interface NeonButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
}

export default function NeonButton({ children, onClick, href }: NeonButtonProps) {
  const ButtonComponent = href ? "a" : "button"

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <ButtonComponent
        className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-transparent rounded-lg group"
        onClick={onClick}
        href={href}
        target={href ? "_blank" : undefined}
        rel={href ? "noopener noreferrer" : undefined}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white"></span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">{children}</span>
        <svg
          className="relative z-10 w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </ButtonComponent>
    </motion.div>
  )
}

